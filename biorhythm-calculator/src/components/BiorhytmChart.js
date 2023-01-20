import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorhytmsSeries } from "../lib/biorhytms";

function BiorhytmChart(props) {

    const birthDate = props.birthDate;
    const targetDate = props.targetDate;
    const range = props.range;

    const datas = calculateBiorhytmsSeries(birthDate, targetDate, range);

    const physicalLineColor = props.physicalLineColor;
    const intellectualLineColor = props.intellectualLineColor; 
    const emotionalLineColor = props.emotionalLineColor;

    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={datas}>
                <CartesianGrid vertical='false' strokeDasharray='2 4'/>
                <XAxis dataKey="date"
                    ticks={[datas[13].date, datas[15].date, datas[27].date]}
                />
                <ReferenceLine x={datas[15].date} />
                <Line type="monotone" dataKey="physical" stroke={physicalLineColor}/>
                <Line type="monotone" dataKey="emotional" stroke={emotionalLineColor} />
                <Line type="monotone" dataKey="intellectual"  stroke={intellectualLineColor}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhytmChart;