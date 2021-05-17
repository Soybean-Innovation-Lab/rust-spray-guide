import { useSelector, useDispatch } from 'react-redux';

import { MakeInput } from '../Utils/make_input';

import {
    setCostOfFungicide,
    setCostOfLabor,
    setPlotSize,
    setPriceOfGrain,
    selectCostOfFungicide,
    selectCostOfLabor,
    selectPlotSize,
    selectPriceOfGrain,
    selectROIResults,
   } from '../../redux/roi';

export const ROIInfo = () => {
    return <div>
	       <h1> What is the economic gain of spraying fungicide?</h1>
         <p className="fs-3">Even when there is a yield increase potential by fungicide
         application, the cost of spraying and gross margin increases still need
         to be considered to determine if spraying is an economically viable
         option. Below please enter in the growth stage you plan to start
         spraying your plants, the cost of fungicide per application per
         hectare, plot size in hectares, and the price of grain. Please use <a href="https://www.xe.com/currencyconverter/" target="_blank">
         this currency converter </a>to convert local currency to US Dollars ($) </p>
	</div>;
};

export const ROI = () => {
    const dispatch = useDispatch();

    const costOfFungicide = useSelector(selectCostOfFungicide);
    const plotSize = useSelector(selectPlotSize);
    const priceOfGrain = useSelector(selectPriceOfGrain);
    const costOfLabor = useSelector(selectCostOfLabor);

    const roi = useSelector(selectROIResults);

    return <div>
      <h1> Return on Investment </h1>
	       <div className="border border-3 shadow shadow-3 p-3 px-5 mx-auto" style={{"width":"max-content"}}>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="costOfFungicide" state={costOfFungicide}
		       set={setCostOfFungicide} units="/MT" formatter={(v) => `\$${v}`}>
		Cost of Fungicide
	    </MakeInput>
	</div>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="plotSize" state={plotSize}
		       set={plotSize} units="ha">
		Plot Size
	       </MakeInput>
	</div>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="priceOfGrain" state={priceOfGrain}
		       set={setPriceOfGrain} units="/MT" formatter={(v) => `\$${v}`}>
		Price of Grain
	       </MakeInput>
	</div>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="costOfLabor" state={costOfLabor}
		       set={setCostOfLabor} units="/spray/ha" formatter={(v) => `\$${v}`}>
		Cost of Labor
	       </MakeInput>
	</div>
         </div>
	       <table className="table border border-3 my-3 mx-auto">
		   <thead>
		   <tr>
		       <th>
			   Growth Stage
		       </th>
		       <th>
			   Number of Sprays
		       </th>
		       <th>
			   Average Yield
		       </th>
		       <th>
			   Increase in Revenue/ha
		       </th>
		       <th>
			   Increase in Total Revenue
		       </th>
		       <th>
			   Revenue Costs
		       </th>
		       <th>
			   Return on inputs
		       </th>
		   </tr>
		       </thead>
		   <tbody>
		   {roi.map((d) => (
		       <tr>
			   <td>
			       {d.growthStage}
			   </td>
			   <td>
			       {d.sprays}
			   </td>
			   <td>
			       ${d.avgYield.toFixed(2)}
			   </td>
			   <td>
			       ${d.incRev.toFixed(2)}
			   </td>
			   <td>
			       ${d.incRevTotal.toFixed(2)}
			   </td>
			   <td>
			       ${d.revCosts.toFixed(2)}
			   </td>
			   <td>
			       ${d.returnOnIn.toFixed(2)}
			   </td>
		       </tr>
		   ))}
		       </tbody>
	       </table>
	       <div className="border border-3 shadow shadow-3 my-3 p-3">
		   <h3> Definitions </h3>
	       <dl class="row">
		   <dt class="col-sm-3">Average yield increases</dt>
		   <dd class="col-sm-9">based on timing and number of sprays are estimated based on select locations in Mueller, et al. 2009. Plant Disease 93(3):243-248. Yield increases from fungicide application are highly dependent on rust pressure. These averages are based on moderate rust pressure and will be lower or higher depending on conducive environment. </dd>


		   <dt class="col-sm-3">Increase in revenue/ha</dt>
		   <dd class="col-sm-9">based off the estimated yield increase (MT/ha) multiplied by the price of grain ($/MT) </dd>

		   <dt class="col-sm-3">Gross margins/ha</dt>
		   <dd class="col-sm-9">calculated by subtracting the cost of fungicide and labor per spray multiplied by the number of sprays from the increase in revenue/ha.</dd>

		   <dt class="col-sm-3">Return on inputs</dt>
		   <dd class="col-sm-9">the gross margin/ha divided by the cost of fungicide/ha multiplied by the number of sprays. </dd>
	       </dl>
		   </div>


    </div>;

}