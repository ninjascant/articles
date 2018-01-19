const D3Node = require('d3-node')
const d3n = new D3Node()
const d3 = d3n.d3 
const fs = require('fs')

var dataset = [
  { name: 'IE', percent: 39.10 },
  { name: 'Chrome', percent: 32.51 },
  { name: 'Safari', percent: 13.68 },
  { name: 'Firefox', percent: 8.71 },
  { name: 'Others', percent: 6.01 }
]
const pallete1 = ['#E3B1AA', '#C3D8C1', '#89C284', '#F0B95D', '#869957']
const pallete2 = ['#F0B5A5', '#AEA68B', '#BDCFD9', '#A2C0A0', '#EEC37F', '#40534F', ]
const width = 250,
  height = 250
const body = d3.select(d3n.document.querySelector('body'))

const svg = body.append('svg')
  .attr("version", "1.1")
  .attr("xmlns", d3.namespaces.svg)
  .attr("xmlns:xlink", d3.namespaces.xlink)
  .attr("width", width)
  .attr("height", height)

const g = svg.append('g')
  .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')')
  
const pie = d3.pie()
  .value(d => d.percent)
  .sort(null)
  .padAngle(.03);

const outerRadius=width/2,
  innerRadius=height/2.4
 
//var color = d3.scale.category10();
 
const arc=d3.arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);

const path=g.selectAll('path')
  .data(pie(dataset))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', (d, i) => pallete2[i])
        
fs.writeFileSync('./chart.svg', d3n.svgString())
console.log(d3n.svgString())
