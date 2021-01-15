const data = {
  "cipher":[
      {
        "name": "ceaser",
        "type": "Ceaser",
        "shift": "Shift",
        "description": "A simple substitution cipher. Each letter is \"shifted\" a number of places in the alphabet. If the shift is 1 than \"A\" would become \"B\", \"Z\" would become \"A\" by effectively wrapping around the alphabet. If a shift of -1 were used, \"Z\" would become \"Y\" and \"A\" would become \"Z\", again by wrapping."
      },
      {
        "name": "atbash",
        "type": "Atbash",
        "shift": "false",
        "description": "Atbash description." 
      },
      {
        "name": "rot13",
        "type": "Rot13",
        "shift": "false",
        "description": "Rot13 description." 
      },
      {
        "name": "railFence",
        "type": "Rail Fence",
        "shift": "Key",
        "description": "Rail Fence description." 
      },
  ],
}

export default data;