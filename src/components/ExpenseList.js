import React from 'react'
import Item from "./ExpenseItem";
import {MdDelete} from "react-icons/md"

const ExpenseList = ({expenses}) => {
    return (
        <React.Fragment>
            <ul className="list">
                {expenses.map((expense) => {
                    return <Item key={expense.id} expense={expense}></Item>
                })}
            </ul>
            {expenses.length > 0 && (
                <button className="btn" > 
                    clear expenses
                    <MdDelete className="btn-icon"></MdDelete>
                </button>)}
            
        </React.Fragment>
    )
}

export default ExpenseList
