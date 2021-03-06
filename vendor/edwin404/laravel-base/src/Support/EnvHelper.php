<?php

namespace Edwin404\Base\Support;


class EnvHelper
{
    public static function env($key)
    {
        switch ($key) {
            case 'uploadMaxSize':
                $upload_max_filesize = @ini_get('upload_max_filesize');
                if (empty($upload_max_filesize)) {
                    return 0;
                }
                $post_max_size = @ini_get('post_max_size');
                if (empty($post_max_size)) {
                    return 0;
                }
                $upload_max_filesize = FileHelper::formattedSizeToBytes($upload_max_filesize);
                $post_max_size = FileHelper::formattedSizeToBytes($post_max_size);
                return min($upload_max_filesize, $post_max_size);
        }
        return null;
    }
}