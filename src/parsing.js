// import React from "react";
import Papa from "papaparse";

// const file = "../data/authors.csv";

export const main = () => {
  Papa.parse(fileInput.files[0], {
    complete: function (results) {
      console.log(results);
    },
  });
};

// export const loadCSVfile = (file) => {
//   let data = Papa.parse(file, {
//     step: function (results) {
//       console.log("steps");
//     },
//     complete: function (results) {
//       console.log("Finished:", results.data);
//       displayData(results);
//     },
//     error: function (results) {
//       console.log("Error:", results);
//     },
//     download: true,
//   });
//   console.log("Data:");
//   console.log(data);
// };

// export const main = () => {
//   const files = ["../authors.csv", "../books.csv", "../magazines.csv"];
//   const objs = [];
//   for (let i = 0; i < files.length; i++) {
//     let obj = createObjectFromFile(file[i]);
//     objs.push(obj);
//   }
//   displayData(objs);
// };

// export const loadCSVfile = (file) => {
//   let data = Papa.parse(file, {
//     step: function (results) {
//       console.log("steps");
//     },
//     complete: function (results) {
//       console.log("Finished:", results.data);
//       displayData(results);
//     },
//     error: function (results) {
//       console.log("Error:", results);
//     },
//     download: true,
//   });
//   console.log("Data:");
//   console.log(data);
// };

// export const createObjectsfromCSVData = (data, obj) => {
//   // to do: creates object from CSV using headers to define field names
// };

// export const displayData = (obsj) => {
//   // to do: create DOM object with the data received
// };

// export const createObjectFromFile = (file) => {
//   //loadCSVfile(file)
//   //createObjectsfromCSVData(data, obj)
// };

// export const main = () => {
//   const files = ["../authors.csv", "../books.csv", "../magazines.csv"];
//   const objs = [];
//   for (let i = 0; i < files.length; i++) {
//     let obj = createObjectFromFile(file[i]);
//     objs.push(obj);
//   }
//   displayData(objs);
// };
