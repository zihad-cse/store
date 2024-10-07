
<?php

// handles product list data collection

$baseUrl = "https://daccastore.erp.place/erp/companies/daccastore/part_pics/";
$numOfProds = 36;
$prods = [];
for ($i = 1; $i <= $numOfProds; $i++) {
    $prods[] = $baseUrl . $i . ".jpeg";
}

echo json_encode($prods);
?>