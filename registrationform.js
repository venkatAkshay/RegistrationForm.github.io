let userForm=document.getElementById("registrationform");

const retriveEntries = () =>{
    let entries = localStorage.getItem("userEntries");
    if(entries){
        JSON.parse(entries);
    }else{
        entries=[];
    }
    return(entries);
    
}
let userEntries = retriveEntries[];
const displayEntries = () =>{
    const entries = retriveEntries();
    entries.map((entry) =>{
      const nameCell =<td>${entry.name}</td>;
      const emailCell =<td >${entry.email}</td>;
      const passwordCell =<td >${entry.password}</td>;
      const AcceptTermsAndConditionCell =<td >${entry.dob}</td>;  

      const row =<tr>${entry.name} ${entry.email} ${entry.password} ${entry.dob}</tr>
      return(row);
    }).join("\n")
    const table = '<table class="table-auto w-full"><tr><th>Name</th><th>Email</th><th>Password</th><th>dob</th><th>Accepted Terms and Condition</th></tr>${tableEntries}</table>';
    let details=document.getElementById("user-entries");
    details.InnerHTML = table;
}
const saveUserForm = (event) =>{
    event.preventDefault();
    const names=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;

    const AcceptTermsAndCondition=document.getElementById("Accept Terms & Condition").checked;
    const entry ={
        names,
        email,
        password,
        dob,
        AcceptTermsAndCondition
    };
    userEntries.push(entry);
    localStorage.setItem("userEntries",JSON.stringify(userEntries));
    displayEntries();
}
userForm.addEventListener("submit",saveUserForm);
displayEntries();