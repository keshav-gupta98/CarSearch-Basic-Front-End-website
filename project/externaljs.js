function f1(a)
{
	a.style.height="55px";
    a.style.backgroundColor="#669900";
}
function f2(a)
{
	a.style.height="50px";
	a.style.backgroundColor="#669900";
}
function f3(a)
{
	a.value="";
}
function f4()
{
	window.open("newaccount.html");
}
function f5()
{
	var x=document.getElementById("fname");
	var y=document.getElementById("lname");
	var z=document.getElementById("mno");
	if(fvalidate(x))
	{
		if(lvalidate(y))
		{
			if(mvalidate(z))
			{
				alert("Thank you for login");
			}
		}
	}
}
function fvalidate(a)
{
	var n=/^[a-zA-Z]+$/;
	if(a.value.match(n))
	{
        return true;
	}
	else
	{
		alert("enter valid first name");
		a.focus();
		return false;
	}
}
function lvalidate(a)
{
	var n=/^[a-zA-Z]+$/;
	if(a.value.match(n))
	{
        return true;
	}
	else
	{
		alert("enter valid last name");
		a.focus();
		return false;
	}
}
function mvalidate(a)
{
	var n=/^[0-9]+$/;
	if(a.value.match(n)&&a.value.length==10)
	{
        return true;
	}
	else
	{
		alert("enter valid mobile number");
		a.focus();
		return false;
	}
}
function f6(a)
{
	var x=a.value;
	var y=document.getElementById("sedan1img");
	var z=document.getElementById("sedana1");
	if(x=="SUZUKI CIAZ")
    {
    	y.src="ciazimage.png";
    	z.href="2.html";
    	z.target="_self";
    	z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HONDA CITY")
    {
      y.src="cityimage.jpg"; 
      z.href="1.html";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HYUNDAI VERNA")
    {
      y.src="vernaimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="SELECT FIRST CAR")
    {
    	y.src="sedansketch.jpg";
    }
}
function f7(a)
{
	var x=a.value;
	var y=document.getElementById("sedan2img");
	var z=document.getElementById("sedana2");
	if(x=="SUZUKI CIAZ")
    {
    	y.src="ciazimage.png";
    	z.href="";
    	z.target="_self";
    	z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HONDA CITY")
    {
      y.src="cityimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HYUNDAI VERNA")
    {
      y.src="vernaimage.jpg";
      z.href="project.html";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="SELECT SECOND CAR")
    {
    	y.src="sedansketch.jpg";
    	z.href="";
    }
}
function f8()
{
	var x=document.getElementById("select1sedan");
	var y=document.getElementById("select2sedan");
	if((x.value=="HONDA CITY"&&y.value=="SUZUKI CIAZ")||(x.value=="SUZUKI CIAZ"&&y.value=="HONDA CITY"))
	{
		window.open("cityciaz.html");
	}
	if((x.value=="HONDA CITY"&&y.value=="HYUNDAI VERNA")||(x.value=="HYUNDAI VERNA"&&y.value=="HONDA CITY"))
	{
		window.open("cityverna.html");
	}
	if((x.value=="HYUNDAI VERNA"&&y.value=="SUZUKI CIAZ")||(x.value=="SUZUKI CIAZ"&&y.value=="HYUNDAI VERNA"))
	{
		window.open("vernaciaz.html");
	}
}
function f9(a)
{
	var x=a.value;
	var y=document.getElementById("hatchback1img");
	var z=document.getElementById("hatchbacka1");
	if(x=="SUZUKI BALENO")
    {
    	y.src="balenoimage.jpg";
    	z.href="";
    	z.target="_self";
    	z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="VOLKSWAGON POLO")
    {
      y.src="poloimage.jpg"; 
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HYUNDAI I20")
    {
      y.src="i20image.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="SELECT FIRST CAR")
    {
    	y.src="hatchbacksketch.jpg";
    }
}
function f10(a)
{
	var x=a.value;
	var y=document.getElementById("hatchback2img");
	var z=document.getElementById("hatchbacka2");
	if(x=="SUZUKI BALENO")
    {
    	y.src="balenoimage.jpg";
    	z.href="";
    	z.target="_self";
    	z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="VOLKSWAGON POLO")
    {
      y.src="poloimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HYUNDAI I20")
    {
      y.src="i20image.jpg";
      z.href="project.html";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="SELECT SECOND CAR")
    {
    	y.src="sedansketch.jpg";
    	z.href="";
    }
}
function f11()
{
	var x=document.getElementById("select1hatchback");
	var y=document.getElementById("select2hatchback");
	if((x.value=="VOLKSWAGON POLO"&&y.value=="SUZUKI BALENO")||(x.value=="SUZUKI BALENO"&&y.value=="VOLKSWAGON POLO"))
	{
		window.open("polobaleno.html");
	}
	if((x.value=="VOLKSWAGON POLO"&&y.value=="HYUNDAI I20")||(x.value=="HYUNDAI I20"&&y.value=="VOLKSWAGON POLO"))
	{
		window.open("poloi20.html");
	}
	if((x.value=="HYUNDAI I20"&&y.value=="SUZUKI BALENO")||(x.value=="SUZUKI BALENO"&&y.value=="HYUNDAI I20"))
	{
		window.open("balenoi20.html");
	}
}
function f12(a)
{
  var x=a.value;
  var y=document.getElementById("suv1img");
  var z=document.getElementById("suva1");
  if(x=="SUZUKI S-CROSS")
    {
      y.src="scrossimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="RENAULT DUSTER")
    {
      y.src="dusterimage.jpg"; 
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HYUNDAI CRETA")
    {
      y.src="cretaimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="SELECT FIRST CAR")
    {
      y.src="suvsketch.jpg";
    }
}
function f13(a)
{
  var x=a.value;
  var y=document.getElementById("suv2img");
  var z=document.getElementById("suva2");
  if(x=="SUZUKI S-CROSS")
    {
      y.src="scrossimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="RENAULT DUSTER")
    {
      y.src="dusterimage.jpg";
      z.href="";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="HYUNDAI CRETA")
    {
      y.src="cretaimage.jpg";
      z.href="project.html";
      z.target="_self";
      z.title="CLICK TO SEE MORE IMAGES";
    }
    if(x=="SELECT SECOND CAR")
    {
      y.src="suvsketch.jpg";
      z.href="";
    }
}
function f14()
{
  var x=document.getElementById("select1suv");
  var y=document.getElementById("select2suv");
  if((x.value=="RENAULT DUSTER"&&y.value=="SUZUKI S-CROSS")||(x.value=="SUZUKI S-CROSS"&&y.value=="RENAULT DUSTER"))
  {
    window.open("dusterscross.html");
  }
  if((x.value=="RENAULT DUSTER"&&y.value=="HYUNDAI CRETA")||(x.value=="HYUNDAI CRETA"&&y.value=="RENAULT DUSTER"))
  {
    window.open("dustercreta.html");
  }
  if((x.value=="HYUNDAI CRETA"&&y.value=="SUZUKI S-CROSS")||(x.value=="SUZUKI S-CROSS"&&y.value=="HYUNDAI CRETA"))
  {
    window.open("cretascross.html");
  }
}
function f15(a)
{
	a.style.width="406px";
}
function f16(a)
{
	a.style.width="400px";
}
function f17(a)
{
   a.width="60";
   a.height="60";
}
function f18(a)
{
   a.width="50";
   a.height="50";
}