// import React, { useState } from 'react'

// const TodoList = () => {

//   type todo = {
//     id: number,
//     text: string
//   }

//   const [todos, setTodos] = useState<todo[]>([
//     {id: 1, text: "learn react"},
//     {id: 2, text: "learn vite"},
//     {id: 3, text: "learn material ui"}
//   ])

//   const [input, setInput] = useState("")

// const addTodo = () => {

//   if (input.trim() === ""){
//     alert("todo cannot be empty")
//     return;
//   }

//   const newTodo: todo = {
//     id: Date.now(),
//     text: input,
//   }

//     setTodos([...todos, newTodo]);
//   setInput("");
// }

// const deleteTodo = (id: number) => {
//       setTodos(todos.filter((todo) => todo.id !== id))
// }

//   return (
//     <div>
//       <h1>My Todo List</h1>

//       <input value={input} placeholder='type your todo here' type="text" onChange={(e) => setInput(e.target.value)} />

//       <button onClick={addTodo}>Add</button>

//   <ul>
//     {todos.map((todo) => (<li key={todo.id}>
//       <span>{todo.text}</span>
//         <button onClick={ () => deleteTodo(todo.id)}>delete</button>
//         </li>))}
//   </ul>

//   <h6>you have {todos.length} left </h6>
//     </div>
//   )
// }

// export default TodoList
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { product } from "./data";

import { useState } from "react";
import Cart from "./Cart";

export default function TodoList() {

  const [addedToCart, setAddedToCart] = useState(true)

  return (
    <div>
    {addedToCart ? (
      <Box position="relative">
      
      <Box
        position="absolute"
        top="0"
        right="0"
        padding="10px"
        sx={{ bgcolor: "white", borderRadius: "1rem" }}
      >
       <Box>
        <Typography variant="h5">CART</Typography>
        <Typography>cart is empty</Typography>
       </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "50vh",
            width: "50vw",
            bgcolor: "white",
            display: "flex",
            overflowInline: "auto",
            borderRadius: "1rem"
          }}
        >
          <Box component="img" src="/pef.jpg" height="100%" width="50%" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography>PERFUME</Typography>
            <Typography variant="h5" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography>
              A floral, solar and voluptuous interpretation composed by olivier
              polge, perfumer-creator for the house of CHANEL
            </Typography>
            <Typography color="green" fontWeight="bold">
              ${product.price}
            </Typography>
            <Button
            onClick={() => setAddedToCart(!addedToCart)}
              startIcon={<ShoppingCartIcon />}
              sx={{ color: "white", bgcolor: "green", fontWeight: "bold" }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    ) : (
      <Box position="relative">
      
      <Box
        position="absolute"
        top="0"
        right="0"
        padding="10px"
        sx={{ bgcolor: "white", borderRadius: "1rem" }}
      >
        <Cart />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "50vh",
            width: "50vw",
            bgcolor: "white",
            display: "flex",
            overflowInline: "auto",
            borderRadius: "1rem"
          }}
        >
          <Box component="img" src="/pef.jpg" height="100%" width="50%" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography>PERFUME</Typography>
            <Typography variant="h5" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography>
              A floral, solar and voluptuous interpretation composed by olivier
              polge, perfumer-creator for the house of CHANEL
            </Typography>
            <Typography color="green" fontWeight="bold">
              ${product.price}
            </Typography>
            <Button
            onClick={() => setAddedToCart(!addedToCart)}
              startIcon={<ShoppingCartIcon />}
              sx={{ color: "white", bgcolor: "green", fontWeight: "bold" }}
            >
              {addedToCart ? (<Typography>ADD TO CART</Typography>) : (
                <Typography>REMOVE FROM CART</Typography>
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    )}
    </div>
  );
}
