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

// export default TodoList"use client";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { product } from "./data";
import { useState } from "react";
import Cart from "./Cart";

// ✅ Reusable ProductDetails Component
function ProductDetails({
  addedToCart,
  setAddedToCart,
}: {
  addedToCart: boolean;
  setAddedToCart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        p: 2,
        flex: 1,
        // Make all child text responsive
        "& *": {
          fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
        },
      }}
    >
      <Typography color="text.secondary">PERFUME</Typography>

      <Typography
        fontWeight="bold"
        sx={{
          fontSize: "clamp(1rem, 2vw, 2rem)",
        }}
      >
        {product.name}
      </Typography>

      <Typography>
        A floral, solar and voluptuous interpretation composed by olivier
        polge, perfumer-creator for the house of CHANEL.
      </Typography>

      <Typography color="green" fontWeight="bold">
        ${product.price}
      </Typography>

      <Button
        onClick={() => setAddedToCart(!addedToCart)}
        startIcon={<ShoppingCartIcon />}
        sx={{
          color: "white",
          bgcolor: "green",
          fontWeight: "bold",
          fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
          "&:hover": { bgcolor: "darkgreen" },
        }}
      >
        {addedToCart ? "Add To Cart" : "Remove From Cart"}
      </Button>
    </Box>
  );
}

// ✅ Main Component
export default function TodoList() {
  const [addedToCart, setAddedToCart] = useState(true);

  return (
    <Box position="relative">
      {/* Top Right Cart Box */}
      <Box
        position="absolute"
        top="0"
        right="0"
        padding="10px"
        sx={{ bgcolor: "white", borderRadius: "1rem" }}
      >
        {addedToCart ? (
          <Box>
            <Typography variant="h5">CART</Typography>
            <Typography>Cart is empty</Typography>
          </Box>
        ) : (
          <Cart />
        )}
      </Box>

      {/* Main Product Container */}
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
            width: "80vw",
            bgcolor: "white",
            display: "flex",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {/* Left Image */}
          <Box
            component="img"
            src="/pef.jpg"
            height="100%"
            width="50%"
            sx={{ objectFit: "cover" }}
          />

          {/* Right Product Details (Reusable Component) */}
          <ProductDetails
            addedToCart={addedToCart}
            setAddedToCart={setAddedToCart}
          />
        </Box>
      </Box>
    </Box>
  );
}
