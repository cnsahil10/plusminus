const add = document.querySelector("#plus");
            add.addEventListener("click", ()=>
                {let num = document.getElementById("num").innerText;
            num++;
            document.getElementById("num").innerHTML=num;});                    
                                    
            
            const sub = document.querySelector("#minus");
            sub.addEventListener("click", ()=>{
                let num = document.getElementById("num").innerText;
                num--;
            document.getElementById("num").innerHTML=num;
            })


            const clear = document.querySelector("#reset");
            clear.addEventListener("click", ()=>{
                document.getElementById("num").innerHTML="0";
            })







