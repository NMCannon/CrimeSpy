from turtle import color
import pandas as pd
import plotly.graph_objects as go

#Read datasets
df = pd.read_excel("2018/crime_2018_daily.xls")

#Create chart
fig=go.Figure()
#Add past values
fig.add_trace(go.Scatter(
    x=df['DATE'], 
    y=df['CRIME'], 
    mode='lines', 
    name="Past Data",
    line=dict(width=4)
))

#Set size and theme
fig.update_layout(
    title="Daily Crime Rates 2018",
    template="plotly_dark",
    xaxis_title="Date",
    yaxis_title="Daily Crime Rate",
    font=dict(
        size=14
    ),
    margin=dict(
        l=60, 
        r=60, 
        t=60, 
        b=60
    ),
)

#Add rangeslider
fig.update_layout(
    xaxis=dict(
        rangeslider=dict(
            visible=True
        ),
        type="date"
    )
)

fig.show()
fig.write_html("2018chart_all.html")