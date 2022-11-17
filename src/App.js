import styles             from "./App.module.css";
import TreeView           from "@mui/lab/TreeView";
import ExpandMoreIcon     from "@mui/icons-material/ExpandMore";
import ChevronRightIcon   from "@mui/icons-material/ChevronRight";
import TreeItem           from "@mui/lab/TreeItem";

//utils
import {getSalaryForShop,getAverageAgeShop,getSalaryForCity,getAverageForCity} from './utils/getSalaryOrAge' 


let data = {
  id: "root",
  name: "root",
  children: [
    {
      name: "Lviv",
      type:"city",
      id: "1",
      children: [
        {
          name: "Silpo",
          type:"shop",
          id: "shopId1",
          children: [
            {
              name: "Pavlo",
              age: 27,
              salary: 27000,
              id: "manager1",
              type:"emploee"
            },
            {
              name: "Marko",
              age: 34,
              salary: 45000,
              id: "manager2",
              type:"emploee"
            },
          ],
        },
        {
          name: "ATB",
          type:"shop",
          id: "shopId2",
          children: [
            {
              name: "Ivan",
              age: 18,
              salary: 18000,
              id: "manager4",
              type:"emploee"
            },
            {
              name: "Oksana",
              age: 33,
              salary: 32000,
              id: "manager5",
              type:"emploee"
            },
          ],
        },
      ],
    },
    {
      name: "Kyiv",
      id: "2",
      type:'city',
      children: [
        {
          name: "Silpo",
          id: "shopId3",
          type:"shop",
          children: [
            {
              name: "Marko",
              age: 22,
              salary: 17000,
              id: "manager6",
            },
            {
              name: "Victor",
              age: 45,
              salary: 35000,
              id: "manager7",
            },
          ],
        },
        {
          name: "ATB",
          type:"shop",
          id: "shopId4",
          children: [
            {
              name: "Andriy",
              age: 21,
              salary: 38000,
              id: "manager8",
            },
            {
              name: "Volodymyr",
              age: 29,
              salary: 42000,
              id: "manager9",
            },
          ],
        },
      ],
    },
  ],
};
function App() {

  const getLabel = (node,index = 0 ) => {

    if (node["type"]==="city") return node["name"]+ " Salary: "+ getSalaryForCity(data)[index]+ " Age: "+ getAverageForCity(data)[index];
    if(node["type"] === 'shop') return node["name"]+ " Salary: " + getSalaryForShop(data).flat()[index] + "Age: "+ getAverageAgeShop(data).flat()[index];
    if(node["type"] === 'emploee') return node.name+ " Salary: " + node.salary + " Age: "+ node.age;
    
    return 'root'
  };

  const renderTree = (nodes,i) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={getLabel(nodes,i)}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node,index) => renderTree(node,index))
        : null}
    </TreeItem>
  );

  return (
    <div className={styles.container}>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 310, flexGrow: 1, maxWidth: "80%", marginTop: "100px" }}
      >
        {renderTree(data)}
      </TreeView>
    </div>
  );
}

export default App;
