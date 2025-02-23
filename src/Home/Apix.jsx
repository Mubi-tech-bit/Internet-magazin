const taom = [
    {
        id: 1,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/4cf9/ad9b/74665513c034fa0d62481bc3c756559d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H80sXhGoqnJGrbuZruoomQSybYXpvOACbQ344zJ2zTT2fjtiCJPXd6QQtf-5qmNjjJk2875I6eYu5sXNjG9lFv35VlvrMGAmcMq2SR-LBIQk-7Tp6JTG6EmUoWEWtYrq~MyF1SfjA9f19sY8QnPxNDFqJ6V3nWUqALVkENUG8z9~xvA-brhK-NXHWaURjOdreZhHm9WEzrYfk~whZfypvtxDtM16X53r93nacW-xWMcX7elmxp~ReX~DsxDAIxYhZUiNH4gqAAIH-14xfutBJp0cHd1AgkeXqfqmdGCHuK2i1KXA2~XmbF3eSOEN39Mhodz231vIdMpporvc8~lo7Q__"
    },
    {
        id: 2,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/afe5/b65b/2a32eac042eb897915e7ea028a77e28a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfYC9RekeBe1dpAimm~ifeemf7i-f4tl4HYvH6S9LYGDJ0Q~fSArs6CKlxSWgLlHoIeic-shcn9xbh2AC9N2hwwBP-VCs6S0NShyfFYnVcHRQkT9qvA4pL92r~tMW9V9YBnY1dV1tUnarF18MpwYsbFvq3k982Np1iumWXrxBzM9Xm9qWj6JXvf47cwFSX55ZBy77LxRqvasJaSC076xjILA82WovFoI2QO9aom3yzQaBXAOWvwxMvWs3NaQWethpPSdhUEvR9sN8NTaiUg7BzooNypg9Ox5Q7jLOa96SLPWdwTU4OLvpnnPCeD51dBfSvCBcpCVeLREGcw-jMut8Q__"
    },
    {
        id: 3,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBPts7L3q1i~~4NYusq7HViwcr62ZpN4Be1GyXvHaykn-nWui1is9kXtyP8DbGSElI72yQYwXR9ZF5hQrcpj2oSJFL6eghnABtZiiByvzkvzwzudQDojwbPigBKm3tSwm~PqG1oZWtaKY6LMzeFthsfsV8KGRIYWok5uodJVUVl9Y53Jm1QlgGxbkjrJhZ7YwpnkTJwPVOSjR2SX83nn5A2-IqDU-6kqe742jEhMEATevR9Wtg1zPkaccsfi3auCc1LD0P79pwo8nKJQQHoiIoCDc2C4ee6vh4m8S6EFq89eEYX3zx6Q345aWtYf-b~P6b0hcQGQ8ZW-Ay6WiRrZ2w__"
    },
    {
        id: 4,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/8fca/b393/49688d038a9c443c1b36ae69269ea6f6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qu7NzCyWO-hG8SlIv05NMYA23Yam20Aw-21D5y4zCNa-~LBw-DZ3Zk6jzXQjf9Eqa6DR8wWhlXc90HyIH3Ao1YRKbWbSyABM~ZQkKtNd83O-DJyQGwXQy300zNxnflS6pY4iD6CNhTIPKPbSdr8m~97EvU0po8YMz-hANAoDx1XkURVYKckRxFYyAQ7aN1kbRI5txKEjS1NcQscBEhZtzIo0QeWZ~TvqguQcrPqRXdWBaqdHChCGJueM93ins7-cVaL587IDv7FEVg7afTFrRJcRrbdDfVhBt5YNW1D6zJO4bA9Fp0jgzkV4aic6UwUOhR-vvYI~xhFp5Azzx15rkg__"
    },
    {
        id: 5,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/e89c/caad/006474d45e79f3332fbd317dda68de00?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BO0BG59gDrfIM4tm-OUTdwZqauTU2V5Kc96cNwZFwEIZUtxGQ9lJt1BGc5fwyDLyNTRC57JMbm~87~T1HsGzFA8PY4Yic1jSxYgvlaK~XDoeLUS0OGSng49IFg3E5QcpHXg12NsTwmlPyP35Xsn3XTxFWV-1Cnra3KSO2sAsARl1WZInEyTIuhIlAtimkHy2kFK4e0zd5iHINhnb6Rx2u9UqWu7iBOBTN2NRSXogIcCU9~vhl1vDUztllr4naC4HbaDTLy8iT0tGcLlSzQkqekVCIeyJ-SiPOhISyd8VApL2sObM5K5eNJ3LAJ1HpIeAIs52wHmutLe4zx-MZxINTQ__"
    },
    {
        id: 6,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lub5ddJhbe1Fdf2m5iRPB5YET21eyOT0KKPVduCJt8UwOX7~PA-D-VBQMb3f~nNsS8fQgidaicvPpFnCtrLbgf2wlGfUkXKdCB7W9IDc7bGxu5LlgSExPJdp2mH5gPx7gq2GqbL9TySTK5HgXHw1L40dT43rkaL5iCsElFOV0AxW~B4e~0HkYySAclOCWrHmbh1kkPOzFOArEBVMZIGGaW-77cc51WiA5ov4i~jWkp2SKRW-OENxGD0avJntfBfTI9TAH7zAKQeWJVroyxSzJi9n8lYcGedXSVw786uosdAz3hkomlNxGowY-6fMytJlQrhu1j1aN0ku4ujtfB0M0g__"
    },
    {
        id: 7,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/a12a/7171/229cc26b4ac51feaf999557d4b75fe31?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnMVK2qq0QW8QBLCxAafLDwz6Ldx1tNJxHAfdj808E77kjRE7-1koM8kMN9WWz~zyG8MYgYAPNbPCBT2eo4wGl0rY0suPLUEbKbuOXXawo~K1JPZDHxqMKIP4fE2ShoITzpGN4s9RM5rLNaJEHhAM2zXBqb1wOvIL81BW5v-ylfQ-KzWbKIXbw4LCSd64rDvpFEUj5HKIYV86arawnMq1opN1ubHfqelo1x1IHoNcLtSgVv1sm-KHmCSDeUum4CsK-SvHE6cypv4F3KtP1eS66aRoOtOqWFIw06wJ95tDFq9qDjxuRH1amC-ePaM0AN6seOq3yI5tXbEOxwIGE~zEg__"
    },
    {
        id: 8,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/ecd2/40ce/7c550720ab20af0840548a832e0f9a28?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izdvWwqxokXQOaEcZNIybWykLGIsNKGHAMphHDpLab2Cg1rwGlQ7QKC7rNcrKmbgHYTwx2NSrz0VcVSNmfTPOM-QUcbUoT4JuxXS14DSAunPDJCNse0EsHL3uhgk-jfyxZgKCnOiYJvgFDvchhtbOzXPpfDGxJcNcQEO8ghQO7xZbEEExgQK1hXukNhTBSQN65GczLKgmIosJRnERW0FWMBl1TQKiR2fyM4xB7dCEf7b6olkKgqzYZx0lXtO0UiK6fTSVxpBd6bZwyRnsMDB-bM8yiZEzresL7h5ezBd4RxikOb5-UP~G5OUNOQrEvoJNElXylIneAW0ZGoFan5QLQ__"
    },
    {
        id: 9,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/a1a3/43aa/f4ca4d669cb5950b5b2f60be023bbf9b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jJm60QUpCrIclrN1gIJdeIsS5YEpuNJytTLC3zKYFLA~l1Y7zOvbP6jmoYQHXR9Ku~YObANiHQbb1hsOlY4y90yVjXBdUASg781Y8~WjCU25KS-BcawRAPyIgD332PnabAlI58E97WmFDHZojK6QgjkPuIUrV1SyXalE2e0E7c~dBsmZ4GqeB5KJv~ll6HyOeJajTub16cJOjWDaYz10e9G1Is6DeQ5H7boqLqUAmitFshb79gyCMd~~dS4N6T-zRhQX2GFOPC0phPU~PPPz5AsIHlW5pLoG2Y3RiiMMj16kD1Xw88x8xvupaIGZLQjlcGASWiz7yt4SIA-aFkGinw__"
    },
    {
        id: 10,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/d2f0/ca0b/a70c3e9c2a536f0817032eca7b69e957?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7TJO6oP7f-56IidbTv7D70vPC5IE7CrY2Lg0LJv4C5eMMWfjOdFm6D6KYXB9lp0va8RzjnYw75Yl4~10lfhwTSeSzqXR1ELIck5OD1BkBYSfD0B4cPn~ICjSvIehleb1A09oabfXhu6yf2ojcQYtEKw~D7I6aaVPPDO61ulKQY10uLGD29mt2HN-aby8E36cC~Z08Mh5sQI3rJd-z-J80XfYFkW1IppR4VKzACLRN5qnNNF36IHwpgA14h3ySS~zlJSEA27xa9e0dOVfhRK-v1YVWTNCp3VniPaQOfO5U7wFWaeWFFHQlqBNwkPiWcoxkYkp6aGwUChzjzd7t-PlA__"
    },
    {
        id: 11,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/d6a7/45de/fcc577e42c714ad142837e22338b7fba?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pi0jvGja7YlFE28BdQQ2OI0tYHnXcJvMfclXBuz7fHTvZlniApLg4EpD3S3jGryVUhbEljEbBU99BwniWfmL9qF-9S~KhvXzx-um85Y-kbz7MbTl~X7EM7sBHzqFqn6cGWhvo1~znDa2t-R6jS60D6x8CTimskB5DfXMuDq9lOUulEGK2Io~dyBd17oPGR~xjDDNAPh4K9rFC51xKdXLGcudolCpdLlpcOXuXacqT~Ze8j6xwDRctsLshHGSN4jXN0TE3Mo5pVzfuq7hNoo1~3l9bfPjNggkY7K7ki7AgyRTai0H1kvt6AJOP5MUTHQf~ReXtagQ9lPHvTvNnCbahQ__"
    },
    {
        id: 12,
        title: 'Barbecue Shish kebab Shashlik Skewer',
        price:  '12.00',
        img: "https://s3-alpha-sig.figma.com/img/f266/f4ea/e601922d23121f3cea5a9509e4eeeaad?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YgxLuvrhmwPMASuLcklCwNcarh4k-L6wPxM2MlQeTVap2MaFuPhfpNttPNd2tR8iuxXzIC4DEhMMrq4S-WhK4OmU~kpYQ2~Z~N-iJ8LKxPB8zZtTuWstox-9rwbWLCmPFIp2y6DbI-gsfPOMXt60hGgWVROGzLgScXziRr0HIa6uz0mdbNpH57quXXnhe-OXqZop0VfKYgWsbWUM51jdgDZQJu3-iqd~s8XIju4zGf4wVQ4FEsJKonQrcUFXzMzp3tc4TCDtiDn1U~6zZEOQEpUzXWxMkOY0RfNz3heSQrCZ9a6UpkjzJEKbotPmkdedcp2cS4rElf46Gfamb7WXNA__"
    },
]



const malumot = [
    {
        id: 1,
        ism: "Maria",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq..."
    },
    {
        id: 2,
        ism: "Maria",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq..."
    },
    {
        id: 3,
        ism: "Maria",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq..."
    },
    {
        id: 4,
        ism: "Maria",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq..."
    },
    {
        id: 5,
        ism: "Maria",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq..."
    },
]

const card = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/8c4d/58fb/016fda9cb21d9377697b1e089f3c59d7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrSLSazuZMmT4nt4CGUjs7f3WTQX5iJAfcgmz~tzDpIdcXfOI7MzJdQrlzd2M-jmeaFmqyZoMqxWxRxSg96Wgww8x5CwmRrLxYYqiQ6eqsIXSsEnM4pFCQZ-r2kz8cAUwAeWkLVmH-dOnI7e7WlGcDkNY0E-TnVHb~H8G7M6sFnEoaRdR73jrEfwp1LFkUwSmMIMaRMRHexw4tRog7lWjJrB0k2Gmna7c7NxVdVppX8WU8xy8KoH8~KUYSPU~9G-~Xgm-riCMkuqQsJ3ZtL1VWz7idsP86klbHXccKNCF0B8sS~BWOWQ~4ij16yLf5JlDsc4eBm~0LsPD0hxHhCzDQ__",
        nom: "Tips For Prepping And Caring For Your Grill",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
        link: "Read More",
        sana: "16 Apr 2021"
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/8c4d/58fb/016fda9cb21d9377697b1e089f3c59d7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrSLSazuZMmT4nt4CGUjs7f3WTQX5iJAfcgmz~tzDpIdcXfOI7MzJdQrlzd2M-jmeaFmqyZoMqxWxRxSg96Wgww8x5CwmRrLxYYqiQ6eqsIXSsEnM4pFCQZ-r2kz8cAUwAeWkLVmH-dOnI7e7WlGcDkNY0E-TnVHb~H8G7M6sFnEoaRdR73jrEfwp1LFkUwSmMIMaRMRHexw4tRog7lWjJrB0k2Gmna7c7NxVdVppX8WU8xy8KoH8~KUYSPU~9G-~Xgm-riCMkuqQsJ3ZtL1VWz7idsP86klbHXccKNCF0B8sS~BWOWQ~4ij16yLf5JlDsc4eBm~0LsPD0hxHhCzDQ__",
        nom: "Tips For Prepping And Caring For Your Grill",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
        link: "Read More",
        sana: "16 Apr 2021"
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/8c4d/58fb/016fda9cb21d9377697b1e089f3c59d7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrSLSazuZMmT4nt4CGUjs7f3WTQX5iJAfcgmz~tzDpIdcXfOI7MzJdQrlzd2M-jmeaFmqyZoMqxWxRxSg96Wgww8x5CwmRrLxYYqiQ6eqsIXSsEnM4pFCQZ-r2kz8cAUwAeWkLVmH-dOnI7e7WlGcDkNY0E-TnVHb~H8G7M6sFnEoaRdR73jrEfwp1LFkUwSmMIMaRMRHexw4tRog7lWjJrB0k2Gmna7c7NxVdVppX8WU8xy8KoH8~KUYSPU~9G-~Xgm-riCMkuqQsJ3ZtL1VWz7idsP86klbHXccKNCF0B8sS~BWOWQ~4ij16yLf5JlDsc4eBm~0LsPD0hxHhCzDQ__",
        nom: "Tips For Prepping And Caring For Your Grill",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
        link: "Read More",
        sana: "16 Apr 2021"
    },
]

export  {taom, malumot, card}