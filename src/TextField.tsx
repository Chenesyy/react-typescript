import React, { useRef, useState } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => { //we are defining "TextField" as a Function Component. Tas since <Props>, meaning itong function na ito nageexpect ng mga values from Props interface
    const [count, setCount] = useState<number | null>(5); //if wala si <number>, nagiinfer si typescript, so kunari useState(5), iinfer nya na number yon. Pero para mas maging "strict", mas ok parin na lalagyan mo sya ng specific type, so ang data type ni useState ay kung ano man nakalagay sa loob ng <>
//    const [count, setCount] = useState<{ text: string }>({text: 'hello'}); //FYI, pwede rin magpasa ng objects like this
//    const [count, setCount] = useState<TextNode>({text: 'hello'}); //then pwede rin interfaace ilalagay
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <input ref={inputRef} onChange={ handleChange } />
        </div>
    );
};