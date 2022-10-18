import React, { useEffect, useState } from "react";
import Localbase from "localbase";
import { HeadingList } from "./components";
import { Route, Routes } from "react-router";
import BinarySearchTrees from "./components/questions/BinarySearchTrees";
import BinaryTrees from "./components/questions/BinaryTrees";
import Navbar from "./components/Navbar/Navbar";
import ArrayQuestions from "./components/questions/ArrayQuestions";
import BackTracking from "./components/questions/BackTracking";
import Matrix from "./components/questions/Matrix";
import Heap from "./components/questions/Heap";
import SS from "./components/questions/SS";
import LL from "./components/questions/LL";
import SQ from "./components/questions/SQ";
import Trie from "./components/questions/Trie";
import DynamicProgramming from "./components/questions/DynamicProgramming";
import Graph from "./components/questions/Graph";
import Greedy from "./components/questions/Greedy";
import String from "./components/questions/String";
import BMan from "./components/questions/BMan";

export const QuestionsContext = React.createContext();
export const functionContext = React.createContext();

function App(props) {
 
  const [dsaqArray, setDsaqArray] = useState([""]);
  const [dsaqBT, setDsaqBT] = useState([""]);
  const [dsaqBackT, setDsaqBackT] = useState([""]);
  const [dsaqBST, setDsaqBST] = useState([""]);
  const [dsaqBM, setBM] = useState([""]);
  const [dsaqDP, setDp] = useState([""]);
  const [dsaqGraph, setGraph] = useState([""]);
  const [dsaqGreedy, setGreedy] = useState([""]);
  const [dsaqHeap, setHeap] = useState([""]);
  const [dsaqMatrix, setMatrix] = useState([""]);
  const [dsaqLL, setLL] = useState([""]);
  const [dsaqSS, setSS] = useState([""]);
  const [dsaqSQ, setSQ] = useState([""]);
  const [dsaqString, setString] = useState([""]);
  const [dsaqTrie, setTrie] = useState([""]);

  let db = new Localbase("db");

  const topics = [
    ["Array", setDsaqArray ],
    ["BackTracking", setDsaqBackT],
    ["Binary Search Trees", setDsaqBST],
    ["Binary Trees", setDsaqBT],
    ["Bit Manipulation", setBM],
    ["Dynamic Programming", setDp],
    ["Graph", setGraph],
    ["Greedy", setGreedy],
    ["Heap", setHeap],
  ];

  const topics2 = [
    ["LinkedList", setLL],
    ["Matrix", setMatrix],
    ["Searching & Sorting", setSS],
    ["Stacks & Queues", setSQ],
    ["String", setString],
    ["Trie", setTrie],
  ];


  function getCollection(name, setwhat) {
    db.collection(name)
      .limit(30)
      .get({ keys: true })
      .then((value) => {
        setwhat((value));
      });
  }



  function getKeyAndUpdate(key, topic, yesorno) {
      console.log(key + "called omg")
      db.collection(topic).doc(key).update({
        "Done [yes or no] ": yesorno
      });
  }
  
  let obj = dsaqTrie[0]["data"];
  console.log(obj + "from obj")

  useEffect(() => {
    topics.forEach((element) => getCollection(element[0], element[1]));
    topics2.forEach((element) => getCollection(element[0], element[1]));
    
  })
  


  // for (var property in obj) {
  //   alert(property + "=" + obj[property]);
  // }
 

  
  

  return (
    <div>
      <Navbar  />

      <Routes>
        <Route
          path="/"
          element={
            <QuestionsContext.Provider value={topics}>
              <HeadingList />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/arrayquestions"
          element={
            <QuestionsContext.Provider value={dsaqArray}>
              <ArrayQuestions />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/binarysearchtrees"
          element={
            <QuestionsContext.Provider value={dsaqBST}>
              <BinarySearchTrees />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/binarytrees"
          element={
            <QuestionsContext.Provider value={dsaqBT}>
              <BinaryTrees />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/bman"
          element={
            <QuestionsContext.Provider value={dsaqBM}>
              <BMan />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/bt"
          element={
            <QuestionsContext.Provider value={dsaqBackT}>
              <BackTracking />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/dp"
          element={
            <QuestionsContext.Provider value={dsaqDP}>
              <DynamicProgramming />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/graph"
          element={
            <QuestionsContext.Provider value={dsaqGraph}>
              <Graph />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/greedy"
          element={
            <QuestionsContext.Provider value={dsaqGreedy}>
              <Greedy />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/matrix"
          element={
            <QuestionsContext.Provider value={dsaqMatrix}>
              <Matrix />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/heap"
          element={
            <QuestionsContext.Provider value={dsaqHeap}>
              <Heap />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/sq"
          element={
            <QuestionsContext.Provider value={dsaqSQ}>
              <SQ />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/ll"
          element={
            <QuestionsContext.Provider value={dsaqLL}>
              <LL />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/ss"
          element={
            <QuestionsContext.Provider value={dsaqSS}>
              <SS />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/string"
          element={
            <QuestionsContext.Provider value={dsaqString}>
              <String />
            </QuestionsContext.Provider>
          }
        />
        <Route
          path="/trie"
          element={
            <functionContext.Provider value={getKeyAndUpdate}>
              <QuestionsContext.Provider value={dsaqTrie}>
                <Trie />
              </QuestionsContext.Provider>
            </functionContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
