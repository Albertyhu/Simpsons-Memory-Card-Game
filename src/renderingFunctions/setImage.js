
export const SetImage = (cellLocation, image, ID, handle) => {
   
    const cell = document.getElementById(cellLocation); 

    const executeFunction = () => {
        handle(ID); 
    }

    cell.src = image; 
    cell.onclick = executeFunction; 
}
