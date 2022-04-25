# A scaling and self routing navigation menu

- The navigation is written in an navigationLinks object, but could be written in JSON or a GraphQL fetch easily.

- If a "link" name is found in the object it is used for the source of the url. Otherwise, the algorithm routes the app based on the tree using the "text" displayed to the user.

    - Spaces are automatically replaced with "-" for URLs.

- Background Images for the dropdown menu are optional.

- If there is no "submenu" array found, the user is routed, rather than shown a submenu.