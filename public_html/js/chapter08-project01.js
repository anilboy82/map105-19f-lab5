/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc 
for(var i=0;i<prices.length; i++){
    console.log("<tr><td>"+ filenames[i] +"</td>")
}*/


for (var i = 0; i < filenames.length; i++) {
try 
{
    outputCartRow(filenames[i], titles[i], quantities[i], prices[i]);
}
catch(e)
{
    console.log(e)
}
}
 
var totalHtml="<tr class='totals'><td colspan='4'>Subtotal</td> <td>$"+getSubtotal().toFixed(2)+"</td>"+
              "<tr class='totals'><td colspan='4'>Tax</td> <td>$"+calculateTax().toFixed(2)+"</td>"+
              "<tr class='totals'><td colspan='4'>Shipping</td> <td>$"+getShippingAmount().toFixed(2)+"</td>"+
              "<tr class='totals' focus'><td colspan='4'><b style='color:#E65100'>Grand Total</b></td> <td><b style='color:#E65100'>$"+getGrandTotal().toFixed(2)+"</b></td></tr>";
      
      document.write(totalHtml);