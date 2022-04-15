import pandas as pd
import plotly.graph_objects as go

#Read datasets
df_past = pd.read_excel("crime_2010-21_mean.xls")
df_pred = pd.read_excel("pred_months.xls")
df_margin = pd.read_excel("pred_errormargin.xls")

#Create chart
fig=go.Figure()
#Add past values
fig.add_trace(go.Scatter(
    x=df_past['DATE'], 
    y=df_past['CRIME'], 
    mode='lines', 
    name="Past Data",
    line=dict(width=4)
))

#Add predicted Values
fig.add_trace(go.Scatter(
    x=df_pred['DATE'], 
    y=df_pred['CRIME'], 
    mode='lines', 
    name="Predicted",
    line=dict(width=4)
))

#Add lower estimates
fig.add_trace(go.Scatter(
    x=df_margin['DATE'],
    y=df_margin['lower CRIME'],
    line_color='#EF553B',
    name='Lower Estimate',
    showlegend=False,
    line=dict(width=1, dash='dot')
))

#Add upper estimates
fig.add_trace(go.Scatter(
    x=df_margin['DATE'],
    y=df_margin['upper CRIME'],
    fill='tonexty',
    fillcolor='rgba(125,125,127,0.2)',
    line_color='#EF553B',
    name='Higher Estimate',
    showlegend=False,
    line=dict(width=1, dash='dot')
))

#Set size and theme
fig.update_layout(
    title="Daily Crime Rates 2010 - 2025",
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
fig.write_html("predplot.html")