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
                                    password = "postgres",
                                    host = "localhost",
                                    port = "5432",
                                    database = "project_taco_db")
#    creating the cursor (vessel to the db)
    cursor=connection.cursor()
    
#   executing the query
    cursor.execute('SET search_path TO project_taco_schema;')
    cursor.execute('''SELECT row_to_json(fc) FROM (SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) 
                      As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(project_taco_schema.geometric_structure.wkt_geom)
                      ::json As geometry, row_to_json((id, rsd_id, gs_id)) 
                      As properties  FROM project_taco_schema.geometric_structure) As f )  As fc;''')
    rows=cursor.fetchall()
    cursor.close()
    connection.close()
    return Response({'data':rows})


