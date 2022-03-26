const mobile =   document.getElementById("mobile");
const basic =   document.getElementById("basic");
const standard =  document.getElementById("standard");
const premium =   document.getElementById("premium");

const planAmount = document.getElementById("plan_amount");
const planTitle = document.getElementById("plan_title");

const plans = {
    Mobile: "₹199",
    Basic: "₹499",
    Standard: "₹649",
    Premium: "₹799"
}






function initialPlan() {
    localStorage.getItem("count") === null ?localStorage.setItem("count",true) : localStorage.setItem("count",false)
    let count = localStorage.getItem("count");
    console.log(count);
    if(count === "true"){
        basic.style.opacity = 1;
        document.getElementById("planB").checked = "checked";
        $(document).ready(function(){
            $("td:nth-child(3)").css("color", "red");
            $("td:nth-child(3) i").css("color", "red");
        });
        localStorage.setItem("plan","Basic");
    }
}


function handlePlan(plan) {
   if(plan === 'Mobile')
   {
       mobile.style.opacity = 1;
       basic.style.opacity = 0.6;
       standard.style.opacity = 0.6;
       premium.style.opacity = 0.6;
       document.getElementById("planA").checked = "checked";

        $(document).ready(function(){
            $("td:nth-child(2)").css("color", "red");
            $("td:nth-child(3)").css("color", "grey");
            $("td:nth-child(4)").css("color", "grey");
            $("td:nth-child(5)").css("color", "grey");

            $("td:nth-child(2) i").css("color", "red");
            $("td:nth-child(3) i").css("color", "grey");
            $("td:nth-child(4) i").css("color", "grey");
            $("td:nth-child(5) i").css("color", "grey");
        });
   }
   if(plan === 'Basic')
   {
       mobile.style.opacity = 0.6;
       basic.style.opacity = 1;
       standard.style.opacity = 0.6;
       premium.style.opacity = 0.6;
       document.getElementById("planB").checked = "checked";

       $(document).ready(function(){
            $("td:nth-child(2)").css("color", "grey");
            $("td:nth-child(3)").css("color", "red");
            $("td:nth-child(4)").css("color", "grey");
            $("td:nth-child(5)").css("color", "grey");

            $("td:nth-child(2) i").css("color", "grey");
            $("td:nth-child(3) i").css("color", "red");
            $("td:nth-child(4) i").css("color", "grey");
            $("td:nth-child(5) i").css("color", "grey");

       });
    

   }
   if(plan === 'Standard')
   {
       mobile.style.opacity = 0.6;
       basic.style.opacity = 0.6;
       standard.style.opacity = 1;
       premium.style.opacity = 0.6;
       document.getElementById("planC").checked = "checked";

       $(document).ready(function(){
            $("td:nth-child(2)").css("color", "grey");
            $("td:nth-child(3)").css("color", "grey");
            $("td:nth-child(4)").css("color", "red");
            $("td:nth-child(5)").css("color", "grey");

            $("td:nth-child(2) i").css("color", "grey");
            $("td:nth-child(3) i").css("color", "grey");
            $("td:nth-child(4) i").css("color", "red");
            $("td:nth-child(5) i").css("color", "grey");
       });
   }
   if(plan === 'Premium')
   {
       mobile.style.opacity = 0.6;
       basic.style.opacity = 0.6;
       standard.style.opacity = 0.6;
       premium.style.opacity = 1;
       document.getElementById("planD").checked = "checked";

       $(document).ready(function(){
            $("td:nth-child(2)").css("color", "grey");
            $("td:nth-child(3)").css("color", "grey");
            $("td:nth-child(4)").css("color", "grey");
            $("td:nth-child(5)").css("color", "red");

            $("td:nth-child(2) i").css("color", "grey");
            $("td:nth-child(3) i").css("color", "grey");
            $("td:nth-child(4) i").css("color", "grey");
            $("td:nth-child(5) i").css("color", "red");
       });
   }
   localStorage.setItem("plan",plan);
}


function getDetails(){
    const fname = localStorage.getItem("fname");
    const sname = localStorage.getItem("sname");
    const cnum = localStorage.getItem("cnum");
    const edate = localStorage.getItem("edate");
    const scode = localStorage.getItem("scode");
    fname === ' '? document.getElementById("fname").value = " " : document.getElementById("fname").value = fname;
    sname === ' '? document.getElementById("sname").value = " " : document.getElementById("sname").value = sname;
    cnum === ' '? document.getElementById("cnum").value = " " : document.getElementById("cnum").value = cnum;
    edate === ' '? document.getElementById("edate").value = " " : document.getElementById("edate").value = edate;
    scode === ' '? document.getElementById("scode").value = " " : document.getElementById("scode").value = scode;

    const plan = localStorage.getItem("plan");
    planAmount.innerHTML = plans[plan]+"/month";
    planTitle.innerHTML = plan;
}

function setUserInfo() {
    const fname = document.getElementById("fname").value;
    const sname = document.getElementById("sname").value;
    const cnum = document.getElementById("cnum").value;
    const edate = document.getElementById("edate").value;
    const scode = document.getElementById("scode").value;
    localStorage.setItem("fname",fname);
    localStorage.setItem("sname",sname);
    localStorage.setItem("cnum",cnum);
    localStorage.setItem("edate",edate);
    localStorage.setItem("scode",scode);
}




