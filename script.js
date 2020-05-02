        var arr = [4,3,2,1,5,6,7,8,9,10,11,12,13,14,15,16]
        var ar  = [1000,0]
        var array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var arrr = {
          "one" : "1000",
          "two" : "1000",
          "three" : "1000",
          "four" : "1000",
          "five" : "1000"
        }
        var imparr = [1000,1000,1000,1000,1000,1000]
        var maxid = 15
        var minid = 0
        const plate = document.getElementsByClassName('plate')
        const time = document.querySelector('.timer')
        var count = 0
        var key = 0

    function newgame() {
        arr = [4,3,2,1,5,6,7,8,9,10,11,12,13,14,15,16];
        ar = [1000,0];
        count = 0;
        key++;

        //shuffle the array
        for(let i=arr.length-1;i>0; i--)
        {
          let j = Math.floor(Math.random() * (i+1));
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        
        for(let i=0; i<arr.length;i++)
        {
          plate[i].innerHTML = arr[i];
        }

        //find max and min elements and their ids
        for(let i=0;i<arr.length; i++){
          if(arr[i]<ar[0]){
            ar[0] = arr[i];
            minid = i;
          }
          if(arr[i]>ar[1]){
            ar[1] = arr[i];
            maxid = i;
          }
        }


        document.getElementById('score').innerHTML = count
        clearInterval(t);
        t = setInterval(timer,1000);
        var g = localStorage.getItem("cvv");
        array.sort(function(a,b){return b-a});
        arrr = JSON.parse(localStorage.getItem("btech"));
        document.getElementById('high').innerHTML = "<br>" + arrr.one + "<br>" + arrr.two + "<br>" + arrr.three + "<br>" + arrr.four + "<br>" + arrr.five;


    }


        function fun(ele) { 

            const p=document.getElementById(ele);
            /*alert(ar[0]);
            alert(ar[1]);
            alert(p.id);
            const v = p.id;
            alert(arr[v-1]);*/
            const v = p.id;
            if (arr[v-1]==ar[0]) {
                ar[1]++;
                ar[0]++;
                if (ar[1]==56) {
                    p.innerHTML = " ";
                    arr[v-1] = " ";
                    alert("Your score is "+count);
                    stoptime();
                arrr = JSON.parse(localStorage.getItem("btech"));
                imparr[0] = arrr.one;
                imparr[1] = arrr.two;
                imparr[2] = arrr.three;
                imparr[3] = arrr.four;
                imparr[4] = arrr.five;
                imparr[5] = count;
                imparr.sort(function(a,b){return a-b});
                arrr.five = imparr[4];
                arrr.four = imparr[3];
                arrr.three = imparr[2];
                arrr.two = imparr[1];
                arrr.one = imparr[0];
                localStorage.setItem("btech",JSON.stringify(arrr));
                array[key] = count;

                }
                else if (ar[1]>40) {
                    p.innerHTML = " ";
                    arr[v-1] = " ";
                }
                else {
                    p.innerHTML = ar[1];
                    arr[v-1] = ar[1];
                }
                
            }
        }

        function timer() {
            count++;
            document.getElementById('score').innerHTML = count;
          

        }

        function stoptime() {
            clearInterval(t);
        }

        var t = setInterval(timer,1000);
