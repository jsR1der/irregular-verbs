import './App.scss'
import {Verb, verbs, VerbTense} from "./verb.ts";
import {ChangeEvent, useEffect, useState} from "react";

function App() {

    const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>(verbs)
    const [filterValue, setFilterValue] = useState('')

    const effectCallback = () => {
        setFilteredVerbs(filterVerbs(filterValue))
    }

    useEffect(effectCallback, [filterValue])

    const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value)
    }


    const filterVerbs = (input: string) => {
        const hasOnlySpaces = input.split('').every(char => /\s/g.test(char));
        const isNumber = !isNaN(+input)
        if (!input || hasOnlySpaces || isNumber) {
            return verbs;
        }
        return verbs.filter(verb => {
            return verb.base.includes(input)
        })
    }
    const columns = Object.keys(VerbTense).filter(key => !(+key))
    return (
        <main>
            <input value={filterValue} onChange={changeFilter} type="text"/>
            <table>
                <thead style={{position: "sticky"}}>
                <tr className="column-header">
                    {columns.map(column => <td key={column}>{column}</td>)}
                </tr>
                </thead>
                <tbody>
                {filteredVerbs.map(verb => <tr key={verb.base}>
                    {columns.map(column => <td key={column}>{verb[column as keyof Verb]}</td>)}
                </tr>)}
                </tbody>
            </table>
        </main>
    )
}

export default App
