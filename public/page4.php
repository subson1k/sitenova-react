<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <title>Contact</title>
    <link rel="stylesheet" href="page4.css" />
</head>
<body>
   

    <div id='mainContainer'>

        <div id="page4">

            <img src="tagWhite.png" alt="" id="tag">
            <img src="smalTtagWhite.png" alt="" id="tag1">
            <img src="smalTtagWhite.png" alt="" id="tag2">

            <div id="menuDiv">

                <ul id="menuUl">
                   <a href="https://sitenova.co.uk/"><li id="menuPage1">Home</li></a>
                   <a href="https://sitenova.co.uk/page2"><li id="menuPage2">Prices</li></a>
                   <a href="https://sitenova.co.uk/page2"> <li id="menuPage3" >Our work</li></a>
                   <a href="https://sitenova.co.uk/page4.php"><li id="menuPage4">Contact</li></a>
                </ul>
                
            </div>
    
    
    
        <img src='planet2.png' alt="" id="backdropPage4">
    
        
        <h1 id="page4H1">contact us</h1>
    
      
    
        <div id="formDiv">
    
            
        <form class="contact-form" action="send.php" method="POST" onsubmit="return validation()">
            <div class="input-field">
              <input id="name" type="text" name="name" placeholder="  Name...."/>
            </div>
            <div class="input-field">
              <input id="email" type="text" name="email" placeholder="  E-mail...."/>
            </div>
           
            <div class="input-field">
              <textarea id="info"name="message"placeholder="Message...."></textarea>
            </div>
            <div class="input-field">
              <button id="submit" type="submit" name="sub-mit" value="submit">Send</button>
            </div>
              
               
           </form>
    
           </div>
    
    
    </div>
    
    
    
    </div>

    <script src="page4.js"></script>
    
    
</body>
</html>