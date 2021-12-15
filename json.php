<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
    // DATA
    $total_rows = 105;
    $results_per_page = 25;
    $current_page = 1;
    $start = 0 + ($results_per_page * ($current_page-1));

    // FILL
    $Result = array();
    $allData = array();
    for ($i=1; $i<=$total_rows; $i++) {
        $Row = array();
        $Row["ID"] = $i;
        $Row["Name"] = "Name".$i;
        array_push($allData,$Row);
    }
    $Data = array_slice($allData,$start,$results_per_page);

    $Meta = array();
    $Meta["total_rows"] = $total_rows;
    $Meta["results_per_page"] = $results_per_page;
    $Meta["total_pages"] = ceil($total_rows/$results_per_page);
    $Meta["current_page"] = $current_page;

    // RETURN
    array_push($Result,$Data);
    array_push($Result,$Meta);
    echo json_encode($Result);
?>