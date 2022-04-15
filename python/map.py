import pandas as pd
import plotly.express as px

token = "pk.eyJ1IjoibmNhbm5vbiIsImEiOiJjbDE1bTkwOG8xMTdlM2VwZGZ2b3oxZjNjIn0.BPZlMzPkiqZ0GCBjMj9Mpw"

us_cities = pd.read_csv("2021/Crime_Incidents_in_2021.csv")

fig = px.scatter_mapbox(us_cities, lat="LATITUDE", lon="LONGITUDE", hover_name="REPORT_DAT", hover_data=["OFFENSE"],
                        color="OFFENSE", zoom=12, height=800)
fig.update_geos(fitbounds="locations")
fig.update_layout(title="Crime 2021 Washington D.C", mapbox_style="dark", mapbox_accesstoken=token, font=dict
(
    size=20
))
fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
#fig.show()
fig.write_html("2021map_all.html")