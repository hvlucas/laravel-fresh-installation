<?php

use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/test-script/', function(){
    $url = request()->url;
    if(!$url){
        return redirect('/');
    }
    $path = base_path();
    $file_path = '/tmp/screenshot_'.time().'.png';
    $storage_path = null;
    $process = new Process(["node", "$path/public/js/screenshot.js", $url, $file_path, 'desktop']);
    $process->setTimeout(300);
    try{
        $process->mustRun();
        $process->wait();

        if(file_exists($file_path)){
            $removal_process = new Process(['rm', '-f', $file_path]);
            $removal_process->mustRun();
        }else{
            log_me("Failed to create screenshot for url: $url; file_path: $file_path; display: $display", 'file_system');
        }
    }catch(ProcessFailedException $e){
        dd($e);
    }
    return 'Success';
})->name('test-script');
