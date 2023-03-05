<?php

namespace App\Http\Controllers;

use Exception;

class ApiController extends Controller
{
    public function returnApi()
    {
        $req_url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        $response_json = file_get_contents($req_url);
        if(false !== $response_json) {
            try {
                return json_decode($response_json);
            } catch(Exception $e) {
                // Handle JSON parse error...
            }
        }
    }
}
