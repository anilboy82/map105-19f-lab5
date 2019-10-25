/* define functions here */
function calculateTotal(quantity,price)
{
    return quantity * price;
}

function getShippingAmount()
{
    if(getSubtotal()>1000)
    {
        return 0;
    }
    else{
        return 40;
    }
}
function getSubtotal()
{
    var total=0;
    for(var i=0;i<filenames.length;i++)
    {
        total=total+calculateTotal(quantities[i],prices[i]);
    }
    return total;
}
function calculateTax()
{
    return (getSubtotal()*taxpercentage)/100;
    
}

function getGrandTotal()
{
    try
    {
        return getSubtotal()+calculateTax()+getShippingAmount();
    }
    catch(e)
    {
        console.log(e);
    }
}

function outputCartRow(file, title, quantity, price,  total)
{
    var htmlString="<tr>"+
            "<td><img src=images/"+file+"></td>"+
            "<td>"+title+"</td>"+
            "<td>"+quantity+"</td>"+
            "<td>$"+price.toFixed(2)+"</td>"+
            "<td>$"+calculateTotal(quantity,price).toFixed(2)+"</td>"+
            "</tr>";
    
    document.write(htmlString);
            
}

    