/*
 * @Author: harrisonhuang harrisonhuang@boyaa.com
 * @Date: 2024-03-22 21:25:30
 * @LastEditors: harrisonhuang harrisonhuang@boyaa.com
 * @LastEditTime: 2024-03-25 13:27:33
 * @FilePath: \byhd\next-demo\src\pages\components\SearchBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



export default function SearchBar() {
    return (
        <div
            style={{
                border: '1px solid rgb(197, 208, 224)',
                borderRadius: '12px', display: 'flex',
                padding: '10px', alignItems: 'center',
                height: '42px',
                width: '200px',
            }}>

            <IconButton type="button" sx={{ p: '10px' }}
                aria-label="search" style={{ color: '#0073E6' }}>
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1 }}
                placeholder="Search"

            />
        </div>
    );
}