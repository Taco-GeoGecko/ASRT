from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
import psycopg2
from rest_framework.response import Response
from django.http import JsonResponse
import postgis
@api_view(['GET'])
def view(request):
    
#     # establishing a connection
    connection = psycopg2.connect(
                                    user = "postgres",

                                    password = "paschal2020",

                                    host = "127.0.0.1",
                                    port = "5432",
                                    database = "project_taco_db")
#    creating the cursor (vessel to the db)
    cursor=connection.cursor()
    
#   executing the query
    cursor.execute('SET search_path TO project_taco_schema;')
    # cursor.execute('''SELECT row_to_json(fc) FROM (SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) 
    #                   As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(project_taco_schema.geometric_structure.wkt_geom)
    #                   ::json As geometry, row_to_json((id, rsd_id, gs_id)) 
    #                   As properties  FROM project_taco_schema.geometric_structure where gs_id<500) As f )  As fc;''')
    cursor.execute('''
SELECT row_to_json(fc) FROM 
( 
    SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features  FROM 
    (

        SELECT 'Feature' As type, ST_AsGeoJSON(lg.wkt_geom)::json As geometry, row_to_json
        (
        (
            SELECT l FROM 
            (
            SELECT
              agric_indicator.ppp_sum,agric_indicator.soil_copper,agric_indicator.soil_phos,agric_indicator.soil_potas,agric_indicator.soil_boron,
              agric_indicator.soil_alumi,agric_indicator.soil_iron,soil_magne,agric_indicator.ndwi_jfm,agric_indicator.rainfall,
              agric_indicator.ndvi_jfm,agric_indicator.land_cover,agric_indicator.slope,agric_indicator.elevation,agric_indicator.lst_jfm,
              agric_indicator.gs_id
                FROM project_taco_schema.agric_indicator
                WHERE agric_indicator.gs_id= lg.gs_id
            ) As l
        )
        ) As properties , lg.id, lg.rsd_id, lg.gs_id
        FROM project_taco_schema.geometric_structure  As lg
    ) As f 
)  As fc;
 ''')
    rows=cursor.fetchall()
    cursor.close()
    connection.close()
    return Response({'data':rows})


