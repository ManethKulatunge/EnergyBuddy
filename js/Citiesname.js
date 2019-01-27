var citiesArr = [
  {
    "flag": "us",
    "name": "Albuquerque"
  },
  {
      "flag": "us",
      "name": "Atlanta"
    },
  {
    "flag" : "us",
    "name": "Boston"
  },
  {
    "flag": "us",
    "name": "Charlotte"
  },
  {
    "flag": "us",
    "name": "Chicago"
  },
  {
    "flag": "us",
    "name": "Chicago"
  },
  {
    "flag": "us",
    "name": "Dallas"
  },
  {
    "flag": "us",
    "name": "Denver"
  },
  {
    "flag": "us",
    "name": "Detroit"
  },
  {
    "flag": "us",
    "name": "Detroit"
  },
  {
    "flag": "us",
    "name": "Houston"
  },{
    "flag": "us",
    "name": "Indianapolis"
  },
  {
    "flag": "us",
    "name": "Kansas City"
  },{
    "flag": "us",
    "name": "Jacksonville"
  },
  {
    "flag": "us",
    "name": "Las Vegas"
  },{
    "flag": "us",
    "name": "Los Angeles"
  },{
    "flag": "us",
    "name": "Miami"
  },{
    "flag": "us",
    "name": "Minneapolis"
  },{
    "flag": "ca",
    "name": "Montreal"
  },{
    "flag": "us",
    "name": "Nashville"
  },{
    "flag": "us",
    "name": "New York"
  },
  {
    "flag": "us",
    "name": "Philadelphia"
  },{
    "flag": "us",
    "name": "Phoenix"
  },{
    "flag": "us",
    "name": "Pittsburgh"
  },{
    "flag": "us",
    "name": "Portland"
  },,{
    "flag": "us",
    "name": "Saint Louis"
  },{
    "flag": "us",
    "name": "San Antonio"
  },{
    "flag": "us",
    "name": "San Diego"
  },{
    "flag": "us",
    "name": "San Francisco"
  },{
    "flag": "us",
    "name": "Seattle"
  },
    {
      "flag": "ca",
      "name": "Toronto"
    },

  {
    "flag": "ca",
    "name": "Vancouver"
  },
  {
    "flag": "ca",
    "name": "Toronto"
  }
];

$.each(citiesArr, function (key, value) {
  console.log(key + "  :" + value.flag);
  const ele = "<div class='item' data-value='" + value.flag + "'><i class=\"" + value.flag + " flag\"></i>" + value.name +
    "</div>";
  $("#menu-items").append(ele);
})
