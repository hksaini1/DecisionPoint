// https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-languages

 






import React, { Component } from 'react';
import * as d3 from "d3";
import {scale} from "d3";
import d3Tip from "d3-tip";
import Data from "../graph_FD.csv"
//var {scale} =require('d3-scale');
// var tip = require("d3-tip");



export default class D3Charts extends Component {
    constructor(props){
        super(props);
        this.myRef= React.createRef();
    }


    drawChart(){
     
            
        var svg = d3.select(this.myRef.current).append("svg")
                    //style("background-color","green")
                    .attr("height",600)
                    .attr("width",1000);

    
// Parse the Data
d3.csv(Data).then(data =>{
   
  

    data.forEach(d => {
        d.val_1=+d.val_1 ;
        d.val_2=+d.val_2;
        d.mark_val=+d.mark_val;
    });
    console.log("Datat",data);
        // Add X axis
        var width =+svg.attr('width');
        var height = 200 ; 
        var height2 = 200 ; 
        const margin={top:20,right:20,bottom:20,left:100};
        //const innerWidth= width - margin.left - margin.right;
const xValue= d=>d.val_1;
const xValue2= d=>d.val_2;

const yValue= d=>d.Brand;

        var xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0,width]);
        console.log("Datat-",xScale.domain(),xScale.range());
     
        var xScale2 = d3.scaleLinear()
        .domain([0, d3.max(data, xValue2)])
        .range([0,width]);
        console.log("Datat",xScale.domain(),xScale.range());
    
        const yScale= d3.scaleBand()
                .domain(data.map(yValue))
                //.range([height, 0], .1)
                .paddingInner(0.6)
                .range([0, parseInt(height)]);
                console.log("Datat",yScale.range());
                
        const yScale2= d3.scaleBand()
                .domain(data.map(yValue))
                //.range([height, 0], .1)
                .paddingInner(0.6)
                .range([0, parseInt(height2)]);
                console.log("Datat",yScale.range()); 
                
              


         const g= svg.append('g')
             .attr(`transform`,`translate(${margin.left},${margin.top})`);
             var yAxis = d3.axisLeft(yScale);

         g.append('g').call(yAxis);
     
            var rt = g.selectAll(".bars")
            .data(data)
            .enter().append("g");
        
          // place the first bar  
          rt.append("rect")
            .attr("class", "bar1")
            .attr('y',d => yScale(yValue(d)))
            .attr("width",d => xScale(xValue(d)))
            .attr("height",yScale.bandwidth())
            //.fill("background",d => xScale(xValue(d))===xScale2(xValue2(d))?"green":"red");
            
        
          // place the second bar on top of it
          rt.append("rect")
            .attr("class", "bar2")
            .attr('y',d => yScale2(yValue(d)))
            .attr("width",d => xScale2(xValue2(d)))
            .attr("height",yScale2.bandwidth()); 
  
  });
  
        
    }

    componentDidMount(){
        // let accessToRef = d3.select(this.myRef.current);
        // accessToRef.style("background-color","green");
        this.drawChart();
    }
    render() {
        return(
        //    <div id='layout'> 
        //     <div ref={this.myRef}></div>
        //     </div>

        <div id='layout'>
    <div id='container'>
    <div ref={this.myRef} ></div>
      {/* <svg /> */}
    </div>
    </div>
        );
    }
}



