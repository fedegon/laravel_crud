<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'detail', 'price'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
