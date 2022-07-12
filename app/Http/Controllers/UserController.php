<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = User::insert(['name'=>$request->user_name,'email'=>$request->email,'password'=>$request->password]);
        if($user)
        {
            return response()->json([
                'message' => 'Success',
            ]);
        } else {
            return response()->json([
                'message' => 'Something went wrong',
            ]);
        }
    }

    public function login(Request $request)
    {
        $user = User::where(['email' => $request->email, 'password' => $request->password])->first();
        if ($user) {
            return response()->json([
                'message' => 'Success',
                'user' => $user,
            ]);
        }
        else{
            return response()->json([
                'message' => 'User does not exist',
            ]);
        }
    }
}
