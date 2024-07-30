
<?php 

// handles product list data collection

$baseUrl = "https://daccastore.erp.place/erp/companies/daccastore/part_pics/";
$numOfProds = rand(10,50);
$prods = [];
for ($i = 1; $i <= $numOfProds; $i++) {
    $prods[] = $baseUrl . $i . ".jpeg";
}
echo json_encode($prods);
?>