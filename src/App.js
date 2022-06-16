import { onValue } from "firebase/database";
import { useState,useEffect } from "react";
import {db} from "./firebase"
// import {uid} from "uid"
import {ref } from "firebase/database"
import './App.css';


// import NewExpense from "./components/ExpenseInput/NewExpense";
// import ExpenseItemGroup from "./components/ExpenseItemGroup";






function snapshotToArray(snapshot) {
  var returnArr = [];
  // console.log(snapshot)

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      // item.key = childSnapshot.key;
      // console.log(item.key)
      returnArr.push(item);
  });

  return returnArr;
};



function App() {
  
  // const [scores,setScores] = useState([]);

  let[expenses,setExpenses] = useState([])

  useEffect(() => {
    
    onValue(ref(db,"115206"),(snapshot) =>{
      setExpenses([])
      let data = snapshotToArray(snapshot);
      console.log("DATA IS BIENG PRINTED")
      console.log(data);
      
      if (data != null){
        // eslint-disable-next-line array-callback-return
        Object.values(data).map((expenses) => {
          setExpenses((oldArray) => [...oldArray,expenses])
        });
      }
      console.log(expenses)
    }); 
  },[]);

  

  // const writeToDatabase = () => {
    
  //   const uuid = uid();
  //   set(ref(db,`/${uuid}`),{
  //     todo,
  //     uuid,
  //   });

  //   setTodo("");
  // };

  
  
  

  // const addExpenseDataHandler = (expenseData) =>{
  //   console.log("app.js")
  //   console.log(expenseData);

    
  //   // this method wont work we have to use prevExpenses 
  //   // object provided by react. Because we are depending on
  //   // previous dummy expense values while adding new one
    
    

  //   // setExpenses([expenseData,...expenses]);
  //   setExpenses((prevExpenses) =>{
  //     return [expenseData,...prevExpenses]
  //   } )
  // }
  
  // expenses.map((expense) => (

  //   name : expense.name

  // ))


  

  // let scorelist = [...new Set(expenses)];
  
  // scorelist.sort(function (a, b) {
  //   return b.Score-a.Score;
  // });

  // console.log("ghj")
  


  

    // const array = [1, 2, 3, 2, 3];

    // calling the function
    // passing array argument
    // let uniq = getUnique(expenses);
  return (

    

    <div className="expenses">
      <h1 style={{color: "white"}}>KSEB ⚡ TRANSMISSION LINE SAFETY ADMIN 👨‍🔧</h1>
      
      {/* <NewExpense addExpenseData = {addExpenseDataHandler}/> */}
      {/* Yeah a self closing tag is enough */}
      {/* <ExpenseItemGroup expenses = {expenses}/> */}
      
     
      {expenses.map((expense) => (
        
        <>
        
        
            
      <div className="expense-item">
      {/* DATE Component */}
      {/* <DateComponent date={props.date}></DateComponent> */}
        <div className="expense-item__description">
          <h2 className="player-name">Current Tension in line no:78</h2>
          <div className="expense-item__price">{expense}</div>
        </div>
      
      </div>
      

        </>
      
      ))}
      
      <div className="expense-item">
      {/* DATE Component */}
      {/* <DateComponent date={props.date}></DateComponent> */}
        <div className="expense-item__description">
          <h2 className="player-name">Current Tension in line no:94</h2>
          <div className="expense-item__price">76</div>
        </div>
      
      </div>
      <div className="expense-item">
      {/* DATE Component */}
      {/* <DateComponent date={props.date}></DateComponent> */}
        <div className="expense-item__description">
          <h2 className="player-name">Current Tension in line no:56</h2>
          <div className="expense-item__price">45</div>
        </div>
      
      </div>
   

      

    </div>
  )
  }

export default App;
