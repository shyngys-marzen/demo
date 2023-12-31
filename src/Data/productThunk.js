import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = {
  all_products: {products:
  [{id:1,
    UserName:"Daniel Belin",
    avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    postDate:"Nov 22, 2021 5m read time",
    title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    photo:"https://s3-alpha-sig.figma.com/img/8feb/e1aa/58d3cbc43d4adc8789779b25217c82c9?Expires=1703462400&Signature=K9xlRbFGGea3lM9HS-n-0nE3MFD14H3DELEpOIkSDWitzVbcqEFpJKJxcQvu~R3Fs-2OfS68Wu63sMaM2AaAIS4mQKzbAfd7q1Y7IZrBxY4HNvkn6pnrDLgty0MXpXQHszOyO7dlaHTg1ZCGEeog-YqMoq7PeuAtonfQZzUVXQDQU55G5XNJDk18AaTOKdluggOz0xTWLhOAssRw~dmwJ9eHUvfyT1lVER2nlXtdOk6RUJ7QxNNL-5qVK4yUx3bjrsd7CCj4JE5-~8hd8GObIGLJlc4UvWcCEgMyvi40LipFaOZjK~v5ZMax-utdSzfe-IKRz~8vA9J-n4Ty-LKOuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
  },
    {id:2,
     UserName:"Daniel Belin",
     avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     postDate:"Nov 22, 2021 5m read time",
     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
     photo:"https://s3-alpha-sig.figma.com/img/ed8b/fb19/26c674074aa3feecdcf24704815220ec?Expires=1703462400&Signature=VzXmidb6RiK23ib1MFazUHMlYqFGEC9HpO5YQZUdWcAt1rQGGbs3RvVzlxTp2NAOr~hvcWIYSLEtFL9pwMLmFS3qacs5cc5IJ81hyVrRypeQmc579c8oZg0zHvI0RefXaimnzwRS1nzSv1VzKUgUhnYnoVtJniU8y2TQbBayz6bVQIKOqtSYv4GSB2zkgH0YYb5b60Gxd3n9Nj9BvTtwqHce1X0LdXuthkHQwu38~B6T-V2DdRkAuOLndFJbzOYr7LZLsVSz8YA~Q985BoWLesB4TN67SYzfzMVW441964HBaP3K91e13lCLS379aZw2gtGeWD45mz7sF0t7THkF4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
    },
    {id:3,
     UserName:"Daniel Belin",
     avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     postDate:"Nov 22, 2021 5m read time",
     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
     photo:"https://s3-alpha-sig.figma.com/img/fd02/19c6/c0485dafcb537ee1b7cf7d0c243fb6ab?Expires=1703462400&Signature=JNVmBIegtEOrKlP1QK8XwEYq66EJFg8iBKBeYNu8odGoa6Q0BaVtsSgHqYjgUwXhhTOPdicd4Qm4u6M2ThJ2GMToNMcyoTXg9J-lfHVc9~32vbcKUzPmXexKMyo6XLa5oV6fFuL8Su85qw~4O~9sKWb21NXH8y8V05vwPu~AfWSps~9vuIZovPioJOWqZTlVB-oHL9g4z-hIgkGdTq9SD6o86-RJoF3yWhe3KBe-LUaJ-o995G4XJaumkmyYkEqbVjW983XHS5UQdHncKHfROV4tUXiGqNcqk3uVbTOAcr28HERUlZNj-UZMG39Iy5lGuV64ajtm~XTEBJ5E1cWpKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
    },
    {id:4,
     UserName:"Daniel Belin",
     avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     postDate:"Nov 22, 2021 5m read time",
     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
     photo:"https://s3-alpha-sig.figma.com/img/149f/0bad/fa5a39a962b8f551cb01a0d51902f4d1?Expires=1703462400&Signature=WHOfPtLKAyIxA~ptMDrLlTAowN-5cgudxXbaJCpJEyP5rHzkMDa8e-88Ok42XYzd5Zo68tGQj5a7QqzYfARoecLH~hJeG~LSlao2~2aNljCgZd~QNn~bC6c6zVv-PhwcMhC12rmB~FHIgu5Oqw7Rct67FjBMMtwo5v8U0pnl4o37cDJqus6iWjSIvmVptAGMr4fVI29d8ZHHnkRPU65NCxn6gTGsHpi7PwbYMYBnQqi~Sx0BwLxVIzXL4u9nhtfZ8jG9WrQVqWGbMl0OnB2cUCwyzABrEGvzbvk20of1-vF~jJEz2PUEV2BE4NdmLn4yhEGiCdw8oZXN7603TS4JWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
    },
    {id:5,
     UserName:"Daniel Belin",
     avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     postDate:"Nov 22, 2021 5m read time",
     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
     photo:"https://s3-alpha-sig.figma.com/img/07fc/8fb0/fa90fef9897bc79904fe8c316274a841?Expires=1703462400&Signature=YcD9j2MP0TVZ7FTGC~OfqoySnpKvnQBVQxe38vLeK-9oBXeS9FNaDYE5b0rl69WrYreJfWt8xgmtueTwerWNSpEhcTG~bgV-Q4ofTAX55K4-Dempp2Eh9~Y36ZHxRrOTS~wisxqyA-xuUUy7bVmYE-zQZUYzV7YuilL8bcSsXlv5coXJ5XC0JU8HMq0RgBRrAc4o6UQP8VNemLTIlrfHinNQ3IzuGyhE0NvKb~j4EUxmlFm4uLPltFWHaiHX6LCbiZ7ha3ee1C9gI1DGkL8wSJnZtazJxQJlNtkypSU32jspwCZdL~k7yGYJxHLTTQDRjpaJfOuDhfFwO74sIPI97A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
    },
    {id:6,
     UserName:"Daniel Belin",
     avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     postDate:"Nov 22, 2021 5m read time",
     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
     photo:"https://s3-alpha-sig.figma.com/img/a6d4/e909/0826f1d6f2baca6e005b05c310a7a26f?Expires=1703462400&Signature=UE8OAivN0GnTJHCNvR5FJm4E57JG1dL1jM4rJLuRSaKAnq9AiBsykGBOXXQxME91pehjcKw498SMfAMl6wHu-8hHJbQYJ9qp~Xy9Q5Ra8bdrv4T1luXb7u20fzK9rfQb2EkGA1oc6qd1E55m8jTeiIQjncCGs01wTAY2QczRDsqLajqTc0PP~dyaYN~vtIDpoWJp3o~ezxntdtJZZ4RGXo~HmwIEoKas0RBjmqhhDugJ9JC-Pmpef7pWHJzqjC80qCre5PT3XBTaOkt542XzccQazA6R1mvlGBB9a~uhA1~rHqPe~gucQ4PrMNhqNLs-CHShOalixH4Xoxm4m~wVfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
     full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
    },
  
    {id:7,
      UserName:"Daniel Belin",
      avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      postDate:"Nov 22, 2021 5m read time",
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      photo:"https://s3-alpha-sig.figma.com/img/3760/695a/c370e0b31788764aba6673dd8ded6006?Expires=1703462400&Signature=iWprMAWP1fErAf~n1DEmo7qNWIwHQ-zZOohpjfNBV-5GeLn1RypN424NOlW6BylYeRJjkE0aYbqA~THe84IxeGLqv0YShT6TJ93DPgE6oVTBMENGqqfJQwpwI1Yx~GeZj53jC2fkKfM~Z7wVgwEoqamIFKEUTeVr7IDM5Z-sAaxt5qRP5AB3Gn~eK9Hm3OcONQ3RlxFgpqHaK1PnkZLlVCpgld8yOsJKduOu0NxWlTzSUearxwWp6AAUuGQrCuocLHcPJDYFLQbwyDhe0imp81GYKWfgE4mQ5ioUXMyzKu4rYJ72FB3R3ssVnLDW8ujC6PMjp4z8uN2jaA77EH0sGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
      },
      {id:8,
       UserName:"Daniel Belin",
       avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       postDate:"Nov 22, 2021 5m read time",
       title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
       photo:"https://s3-alpha-sig.figma.com/img/817a/8778/e4c6a5a3b4562f8065553c5426f6402f?Expires=1703462400&Signature=IQyJZh0uRY3lw7mo7DwTqWwCCw9wkSSoTZ0kZfY2XKrsbFDG-jf7kR1AZFw1kJcWVNTXLi9tLzC-zhGflCeIBYbilqvmY6cKbKUtcNxTl4Qk0b-txRyAZnTzB2l8x3a0R8qsccxgkBOvYF8U~LTsKyzRrvMoHlJHGuUfn~AhIydghIVtGLSDybhpaFKi3bb6MZfPKJGoDTkpGByLIyuUPCzlv0HmFJ94ySzBXilWYvMsaqFKZn0kyCLAmIFyyZ6EGyrjdx8gDGtWeRuPKgHGGQ-QwwEx4ej9-UErU9uaQFXDv591fzgJ7B14HD90O0Oxdg~QsdnG2xP-X~pI~7ZwGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
      },
      {id:9,
       UserName:"Daniel Belin",
       avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       postDate:"Nov 22, 2021 5m read time",
       title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
       photo:"https://s3-alpha-sig.figma.com/img/efcf/e537/52441a8730428685c3d9f48b7deaca10?Expires=1703462400&Signature=ayx-MylQeNfa2ZBjQ0tl5qWwGMjrjFu0gBI3-1UZnbV1hM2Wp-Qnrr0EmpjU1YJVMzAamYHSKMWy7v5t4WnWCQS~b6CPxlAmZ08qrawXUPjpAzi3O9PFApbAKNKr7V8LFgbraJ6x15Wkzpgn7uBIoD9dvN8FXZfHlqtjIRXOBM0uvpEoAk9w0gO~~cNvivxxkvgD~DAk~PaurPKELJFp3WjxgWvZW6XtdKsH3tbtPJwp7QnuJzrI8POhRRdopop~qbH4NganMl~QDSPB3zR45bfrYxqsvfaboCmJLBsZgoQ984SP00kZwuYKicfam9yYWHgelndpmHJ2b4-WpJ1riQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
      },
      {id:10,
       UserName:"Daniel Belin",
       avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       postDate:"Nov 22, 2021 5m read time",
       title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
       photo:"https://s3-alpha-sig.figma.com/img/736f/08f1/be2f09754a8eeb093768f53d1a6adb71?Expires=1703462400&Signature=ZJlu~ZylpjF3nKDpOLOSmoTqg21e83b0wvXGudRoBC7yTWbYEwJZ-vS6lZfMlDxSxerL5I07OFHcKCju7s9w7YcAWZw9sHt-dRAsV4W5jVo3Iw7u3BZAX3df26Eu3d0aEjD4ZPPa5nElz3Fshd303DkMGJA4HMT3Gsbe4H84Csq5Zn99F-aGTgYCKCANUpE2xpA0v6y-ZV9RInraGW-tcV1iTeowaG-816oDI0HyoTiv3x1t0~VZpAAfZwkJ8DIsvQ-yYVeu~xYNKviwP3jYhJ0Zn76jx6mbsBcgbSocd7pn1Y~QtrIEsSoeR8X4OIPQepgg-KAl9J0fpXZlQFw3MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
      },
      {id:11,
       UserName:"Daniel Belin",
       avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       postDate:"Nov 22, 2021 5m read time",
       title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
       photo:"https://s3-alpha-sig.figma.com/img/e0a3/4aa8/0fea7d8b588d56f41c081eb65ba4d2e6?Expires=1703462400&Signature=HQ~Plx8pEZ6n~ivNpTULw6XArm8uxwF081gMJyhobZPt6d6UwByPB4m8YaGy~jIoUS6H1yJ-djSxcNoxN3obYuIqhmJEGabzDWviGnXRNIFbMmqYJNoK6Q0EszR2PBi~rDB-8n4bG~2SyUV5~uQw42khu4XIyS2AhaEBjXcs9RZplS01FWilTJwbTRfG05QITwZJoS~AN9p3d-eDLjg~jgNWQcYSasekZyI86taYmnuMSVnalFlPfDcUG0GbZxsxpyHD5SpHT0bKFA4iiXTDtgxT1VCFJF7SvgZfLK~G3kVC19cR~ieu49Q-B~PW7Y66KQNOgjn9U5ihyvbQdeQVCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
      },
      {id:12,
       UserName:"Daniel Belin",
       avatar:"https://s3-alpha-sig.figma.com/img/b678/f0c5/9f5ae11c25a8caea34c5fb1702dcb2ac?Expires=1703462400&Signature=qaCNaR~AcfOgvlOIykYM0OBtKeNsGuercB273eotb-Upi8XbEoN-oAT90plO3lVvZguMBnb242E1yGo0fV661RfhBDDfoSOJzpaiHkDM1hfN6DWT0atw9~K9gQmi4Ev-Rvovc-3mzYr6bm87k-7NRMvK3mwNvvtHavmUv06QINJTStrxawdQEoTUfVsoRTmqVA6A7QAQ0975Vm8gbrvcGGn6KXekmFof5d-qKiiZBO8fI8mn7svPUHARWP298TTIOTzIOg5cXMXejEISVvyUw5zFXXvUpC4iyrG05kQzaV6xQS4si9HlRFrcRl1L87LdgB3KeyP0R9YiEyrkpY5X1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       postDate:"Nov 22, 2021 5m read time",
       title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
       photo:"https://s3-alpha-sig.figma.com/img/d35c/b0f7/d8a092f6bb5bc78a6deaa26e116987cf?Expires=1703462400&Signature=NiY72nlDupIXuNd2ERI7rYJyudBd4QKSzSNNagSmt87-lx8SAWja~Dh0YXkqkIUKNhD0YEhT1tJjEMxHVZtP92b0ynpm8aQfNlpLCzZ1tiAMdNWh~L3~n0VP~nJ6dC7-ayi-5XRMv4gT2SRZrIOlLapnATyHkCc8m~9sdY5CeZfSMRuaYtzQp9DtOMubyeNUMtT188VAXlhtfUJCoaN~MRnT6OlG2cut~pSxJGPe6XMNOHUTq-gPjhstI13Vo6jJrmUVqWnNDt6vxYYgeO0~TBf6DJVXjfPbHrJlFmG~tBJ0nDoR5Jv3JovPgSaPOXuNm40RYogbMpAaCWv~8la~UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
       full_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis"
      },
    

  ],
}};

export const getAllProductsThunk = createAsyncThunk(
  "productSlice/getAllProductsThunk",
  async function () {
    
      const data = BASE_URL.all_products;

      return data;
  }
);


