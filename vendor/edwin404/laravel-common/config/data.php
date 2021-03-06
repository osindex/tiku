<?php
return [
    'upload' => [
        'image' => [
            'maxSize' => 1024 * 1024 * 1024,
            'maxWidth' => 9999,
            'maxHeight' => 9999,
            'extensions' => ['jpg', 'png', 'gif', 'jpeg', 'ico'],
            'compress' => true,
        ],
        'video' => [
            'maxSize' => 1024 * 1024 * 1024,
            'extensions' => ['mp4', 'flv']
        ],
        'audio' => [
            'maxSize' => 1024 * 1024 * 1024,
            'extensions' => ['mp3']
        ],
        'file' => [
            'maxSize' => 1024 * 1024 * 1024,
            'extensions' => ['pdf', 'xls', 'xlsx', 'doc', 'docx', 'txt']
        ],
        'document' => [
            'maxSize' => 1024 * 1024 * 1024,
            'extensions' => ['jpg', 'png', 'pdf', 'bmp', 'mov']
        ]
    ]
];