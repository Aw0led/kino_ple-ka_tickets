function GenerateTicket(){
    let t_cont = document.getElementById("t_container");

    let movie =  document.getElementById("movie").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let date = document.getElementById("date").value;
    let seat = document.getElementById("seat").value;
    
    GenerateBarcode(movie);

    document.getElementById("t_num").innerHTML = "#" + Math.floor(Math.random() * 10000000)
    document.getElementById("t_mov_name").innerHTML = movie;
    document.getElementById("t_fname").innerHTML = fname;
    document.getElementById("t_lname").innerHTML = lname;
    document.getElementById("t_seat").innerHTML = seat;
    document.getElementById("t_date").innerHTML = date;

    t_cont.style.visibility = "visible";
}

function GenerateBarcode(_name){
    JsBarcode("#t_barcode", _name);
}