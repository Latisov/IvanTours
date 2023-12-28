

    //     עמוד המתאר את מסלול הטיול לפי ימים (אפשר ליצור רק עמוד אחד כזה).
    //     כל יום הוא כפתור אותו ניתן לפתוח ולהקריס (למשל, אם נלחץ על יום ראשון – הלו"ז של יום ראשון יפתח לנו.
    //     אם נלחץ על יום ראשון פעם שנייה, הלו"ז יעלם לנו)
    function toggleSchedule(dayId) {
        var schedule = document.getElementById(dayId);
        if (schedule.style.display === "none") {
            schedule.style.display = "block";
        } else {
            schedule.style.display = "none";
        }
    }


    //     עמוד הרשמה לטיול.
    //     העמוד יציג את התאריכים הזמינים לחודש הקרוב
    //     (ניתן להציג אותו כרשימה, אך נקודות בונוס ינתנו אם יוצג בפורמט של לוח שנה עם תאריכים זמינים)
    function getDay(day) {
        var date = parseInt(day);
        document.getElementById("print").innerText = date + "/" + "08" + "/" + "2023";


    // Array
        const dates = [10,12,16,20,22];
            if (dates.includes(date)){
                document.getElementById("print2").innerHTML ="הזמנה ל " + date + "/" + "08" + "/" + "2023";

                    //     העמוד יכיל טופס המקבל פרטי משתמש (שם, מייל, טלפון, הערות), מחיר ותאריך הזמנה.
                    //  יש לבדוק שכל הפרטים הוכנסו כהלכה (שם לא ריק, טלפון 10 מספרים שמתחיל ב-0, רק בתאריך זמין וכו')
                    document.querySelector('.printPrice').addEventListener('click',()=>{
                        let name = document.querySelector('.name').value;
                        let imail = document.querySelector('.mail').value;
                        let number = document.querySelector('.phone').value;
                        let notes = document.querySelector('.notes').value;
                        let count = 1;
                        if (name !== ""){
                            count++;
                        }
                        if (parseInt(number[0]) === 0 && parseInt(number.length) === 10){
                            count++;
                        }
                        if (count === 3) {
                            document.querySelector('.resultName').innerHTML = "Name: " + name;
                            document.querySelector('.resultImail').innerHTML = "Imail: " + imail;
                                document.querySelector('.resultPhone').innerHTML = "Num of phone: " + number;
                                    document.querySelector('.resultNotes').innerHTML = "Notes: " + notes;
                                        document.querySelector('.resultPrice').innerHTML = "The price is: " + 1950 + " $"
                        }else {
                            document.querySelector('.resultName').innerHTML = "לבדוק אם הנתונים ממולאים נכון";
                        }


                        //  JSON

                        const dataToSave = {
                            name: name,
                            imail: imail,
                            phoneNumber: number,
                            notes: notes,
                            price: 1950 + "$"
                        };
                        console.log(dataToSave.name,dataToSave.phoneNumber,dataToSave.price);
                    })
            } else {
                document.getElementById("print").innerHTML = "אין הזמנות לתאריך זה";
                    document.getElementById("print2").innerHTML = "צריך לבחור תאריך";
            }
    }
