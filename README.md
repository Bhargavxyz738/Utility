# Lazy CSS - A Lightweight CSS Utility Library

This library provides a set of simple, single-purpose CSS classes and a companion JavaScript file to dynamically apply styles based on class names. It's designed to be a minimal, easy-to-use alternative to larger utility-first CSS frameworks, giving you the flexibility to rapidly style elements without writing custom CSS.

## How to Use

1.  **Include the Files:** Add the following lines to the `<head>` of your HTML document:

    ```html
    <link rel="stylesheet" href="https://bhargavxyz738.github.io/Utility/utility.css">
    <script src="https://bhargavxyz738.github.io/Utility/utility.js"></script>
    ```

2.  **Apply Classes:** Use the provided utility classes directly in your HTML elements' `class` attribute.  The JavaScript will automatically apply the corresponding styles during the `DOMContentLoaded` event.

    ```html
    <div class="flex flex-center w-100px h-50px bg-skyblue br">
        Hello, world!
    </div>
    ```

## Classes Available

The library is divided into several categories for easy reference. Note that most classes involving numeric values can be used with the Javascript companion file to specify units like `px`, `%`, `em`, `rem`, `vh`, `dvh`, and `vw`.

### Layout

| Class             | Description                                      |
| ----------------- | :----------------------------------------------- |
| `.flex`            | `display: flex;`                                 |
| `.flex-r`          | `flex-direction: row;`                           |
| `.flex-rr`         | `flex-direction: row-reverse;`                   |
| `.flex-column`     | `flex-direction: column;`                        |
| `.flex-cr`        | `flex-direction: column-reverse;`                |
| `.flex-wrap`       | `flex-wrap: wrap;`                               |
| `.flex-no-wrap`    | `flex-wrap: nowrap;`                             |
| `.flex-grow-1`    | `flex-grow: 1;`                                  |
| `.flex-shrink-1`  | `flex-shrink: 1;`                                |
| `.flex-center`     | `display: flex; justify-content: center; align-items: center;` |
| `.flex-start`      | `justify-content: flex-start;`                   |
| `.flex-end`        | `justify-content: flex-end;`                     |
| `.flex-space-evenly`| `justify-content: space-evenly;`                 |
| `.grid`            | `display: grid;`                                 |
| `.grid-cols-2`     | `grid-template-columns: repeat(2, 1fr);`         |
| `.grid-cols-3`     | `grid-template-columns: repeat(3, 1fr);`         |
| `.grid-cols-4`     | `grid-template-columns: repeat(4, 1fr);`         |
| `.grid-cols-auto` | `grid-template-columns: auto;`                   |
| `.grid-rows-2`     | `grid-template-rows: repeat(2, 1fr);`            |
| `.grid-rows-3`     | `grid-template-rows: repeat(3, 1fr);`            |
| `.block`           | `display: block;`                                |
| `.inline`          | `display: inline;`                               |
| `.inline-block`    | `display: inline-block;`                         |
| `.hide`            | `display: none;`                                 |
| `.vis`             | `visibility: visible;`                           |
| `.inv`             | `visibility: hidden;`                            |
| `.ov-hide`         | `overflow: hidden;`                              |
| `.relative`        | `position: relative;`                            |
| `.absolute`        | `position: absolute;`                            |
| `.fixed`           | `position: fixed;`                               |
| `.sticky`          | `position: sticky;`                              |
| `.ov-auto`           | `overflow: auto;`                            |
| `.ov-scroll`         | `overflow: scroll;`                        |
| `.ovx-hide`         | `overflow-x: hidden;`                            |
| `.ovx-auto`         | `overflow-x: auto;`                             |
| `.ovy-hide`         | `overflow-y: hidden;`                            |
| `.ovy-auto`         | `overflow-y: auto;`                             |
| `.cursor-poimt`      | `cursor: pointer;`                                  |
|`.cursor-def` | `cursor: default;`                         |
|`.cursor-txt` | `cursor: text;`                         |
|`.cursor-mv`| `cursor: move;`                         |
|`.cursor-na`        | `cursor: not-allowed;`                      |
| `.lst-n`       | `list-style: none;`               |
| `.lst-d`           | `list-style-type: disc;`                    |
|`.lst-dec`      | `list-style-type: decimal;`            |
|`.a-c`| `align-items: center;`|
|`.a-s`| `align-items: flex-start;`|
|`.a-e`| `align-items: flex-end;`|
|`.a-b`| `align-items: baseline;`|
|`.a-stretch`         | `align-items: stretch;`                  |
|`.va-t`| `vertical-align: top;`              |
|`.va-m`         | `vertical-align: middle;`                     |
|`.va-b`         | `vertical-align: bottom;`                    |
|`.va-bl`      |`vertical-align: baseline;`              |
|`.j-c`        |`justify-content: center;`|
|`.j-start`         |`justify-content: flex-start;`               |
|`.j-end`         |`justify-content: flex-end;`               |
| `.c`               | `display: flex; align-items: center; justify-content: center;` |
| `.full`            | `width: 100%; height: 100%;`                     |
| `.cover`           | `position: absolute; top: 0; left: 0; width: 100%; height: 100%;` |
| `.fix-cover`       | `position: fixed; top: 0; left: 0; width: 100%; height: 100%;` |
| `.absolute-c`      | `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);` |
| `.space-between`   | `justify-content: space-between;`                |
| `.space-around`    | `justify-content: space-around;`                 |
| `.space-evenly`    | `justify-content: space-evenly;`                 |
| `.border-box`      | `box-sizing: border-box;`                        |
| `.box-c`         |`box-sizing: content-box;`                         |
|`.w-f`| `width: 100%;`  |
|`.w-dvw` | `width: 100dvw;` |
|`.w-vw`| `width: 100vw;`       |
|`.h-f`         | `height: 100%;`       |
|`.h-dvh`| `height: 100dvh;`  |
|`.h-vh`        |`height: 100vh;`|
|`.mw-f`         |`max-width: 100%;`           |
|`.mh-f`         |`max-height: 100%;`            |
|`.minw-f`         |`min-width: 100%;`            |
|`.minh-f`          |`min-height: 100%;`     |

### Dynamic Sizing (with `utility.js`)

| Class Pattern        | Description                                                                  | Example            |
| :------------------- | :--------------------------------------------------------------------------- | :----------------- |
| `w-[value][unit]`   | Sets the width of the element.                                                | `w-100px`, `w-50%`  |
| `h-[value][unit]`   | Sets the height of the element.                                               | `h-25em`, `h-80vh` |
|`gap-[value][unit]` | Sets the gap (for flex and grid containers).  |`gap-10px` , `gap-2vw`         |
|`t-[value][unit]`    | Sets the `top` position of absolutely or relatively positioned elements.     | `t-10px`           |
|`b-[value][unit]`    | Sets the `bottom` position.                                                   | `b-5em`            |
|`l-[value][unit]`    | Sets the `left` position.                                                     | `l-20%`            |
|`r-[value][unit]`    | Sets the `right` position.                                                    | `r-1rem`           |

### Dynamic Padding and Margins (with `utility.js`)

| Class Pattern         | Description                                                             | Example             |
| :-------------------- | :---------------------------------------------------------------------- | :------------------ |
| `p-[value][unit]`    | Sets padding on all sides.                                              | `p-10px`, `p-2em`   |
| `pt-[value][unit]`   | Sets padding-top.                                                      | `pt-5px`            |
| `pb-[value][unit]`   | Sets padding-bottom.                                                   | `pb-1rem`           |
| `pl-[value][unit]`   | Sets padding-left.                                                     | `pl-20%`            |
| `pr-[value][unit]`   | Sets padding-right.                                                    | `pr-10px`           |
| `px-[value][unit]`   | Sets padding-left and padding-right.                                  | `px-5em`            |
| `py-[value][unit]`   | Sets padding-top and padding-bottom.                                   | `py-10px`           |
| `m-[value][unit]`    | Sets margin on all sides.                                               | `m-10px`, `m-2em`   |
| `mt-[value][unit]`   | Sets margin-top.                                                       | `mt-5px`            |
| `mb-[value][unit]`   | Sets margin-bottom.                                                    | `mb-1rem`           |
| `ml-[value][unit]`   | Sets margin-left.                                                      | `ml-20%`            |
| `mr-[value][unit]`   | Sets margin-right.                                                     | `mr-10px`           |
| `mx-[value][unit]`   | Sets margin-left and margin-right.                                     | `mx-5em`            |
| `my-[value][unit]`   | Sets margin-top and margin-bottom.                                      | `my-10px`           |

### Borders

| Class        | Description                  |
| ------------ | :--------------------------- |
| `.br`        | `border: 1px solid #000;`    |
| `.br-orange` | `border: 1px solid orange;`  |
| `.br-gray`   | `border: 1px solid #eee;`    |
| `.br-yellow` | `border: 1px solid yellow;`  |
| `.br-white`  | `border: 1px solid white;`   |
|`.br-skyblue`  |`border: 1px solid skyblue;` |

### Dynamic Border Radius (with `utility.js`)

| Class Pattern         | Description               | Example            |
| :-------------------- | :------------------------ | :----------------- |
| `round-[value][unit]` | Sets `border-radius`.     | `round-10px`, `round-50%` |

### Box Shadows

| Class       | Description                                    |
| ----------- | :--------------------------------------------- |
| `.shadow`    | `box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);` |
| `.shadow-md` | `box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);` |

### Hover Effects

| Class           | Description                                               |
| --------------- | :-------------------------------------------------------- |
| `.bg-black:hover` | `background-color: black;` on hover                      |
| `.bg-gray:hover`  | `background-color: #eee;` on hover                        |
| `.bg-orange:hover`| `background-color: darkorange;` on hover                 |
| `.scale:hover`   | `transform: scale(1.05); transition: 0.3s;` on hover    |
| `.tr`   |`transition: all 0.3s ease-in-out;` |

### Active Effects

| Class                  | Description                             |
|-----------------------|:----------------------------------------|
| `.bg-black:active`      | `background-color: black;` on active   |
|`.bg-gray:active` |`background-color: #eee;` on active     |
|`.orange-bg:active`      |`background-color: orange;` on active  |

### Fonts

| Class       | Description                        |
| ----------- | :--------------------------------- |
| `.b`         | `font-weight: bold;`               |
| `.b-l`       | `font-weight: 300;`              |
| `.b-m`      |`font-weight: 500;`                   |
|`.b-h`       |`font-weight: 700;`                |
| `.italic`    | `font-style: italic;`              |
| `.roboto`    | `font-family: 'Roboto', sans-serif;` |
| `.underline` | `text-decoration: underline;`      |
| `.strike`    | `text-decoration: line-through;`   |
| `.uppercase` | `text-transform: uppercase;`        |
| `.lowercase` | `text-transform: lowercase;`        |
| `.capital`   | `text-transform: capitalize;`       |
| `.no-dec`    | `text-decoration: none;`           |
| `.ls`        | `letter-spacing: 2px;`              |
|`.ls-w`     |  `letter-spacing: 4px;`             |
| `.ws`        | `word-spacing: 4px;`                |

### Dynamic Font Size (with `utility.js`)
| Class Pattern      | Description         | Example           |
| :----------------- | :------------------ | :---------------- |
| `text-[value][unit]` | Sets `font-size`.   | `text-16px`, `text-1.2em` |

### Dynamic Text Color (with `utility.js`)
| Class Pattern | Description         | Example         |
| :------------ | :------------------ | :-------------- |
| `c-[color]`   | Sets `color`.       | `c-red`, `c-blue` |

### Dynamic Background Color (with `utility.js`)
| Class Pattern | Description         | Example             |
| :------------ | :------------------ | :------------------ |
| `bg-[color]`   | Sets `background-color`. | `bg-yellow`, `bg-green` |

### Opacity

| Class     | Description       |
| --------- | :---------------- |
| `.op-50`  | `opacity: 0.5;`   |
| `.op-75`  | `opacity: 0.75;`  |
| `.op-100` | `opacity: 1;`     |

## Contributing

Contributions are welcome! If you find a bug or have a suggestion for a new utility class, please open an issue or submit a pull request. Please follow the existing naming conventions and coding style.
