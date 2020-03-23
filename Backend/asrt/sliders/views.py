from rest_framework.decorators import api_view
import psycopg2
from rest_framework.response import Response


@api_view(['GET'])
def view(request):
        # establishing a connection
    connection = psycopg2.connect(
                                    user = "postgres",

                                    password = "508282044",

                                    host = "127.0.0.1",
                                    port = "5432",
                                    database = "project_taco_db")
        # creating the cursor (vessel to the db)
    cursor=connection.cursor()
        # executing the query
    # cursor.execute("SELECT * FROM project_taco_schema.agric_indicator where gs_id<10 ")
#     cursor.execute('''select ppp_sum,(ndvi_jfm+ndvi_amj+ndvi_jas+ndvi_ond)/4,
# (ndwi_jfm+ndwi_amj+ndwi_jas+ndwi_ond)/4,soil_phos,soil_copper,soil_iron,soil_magne,
# rainfall,soil_alumi,soil_potas,(lst_jfm+lst_amj+lst_jas+lst_ond)/4,slope,elevation,
# land_cover, gs_id from project_taco_schema.agric_indicator where gs_id<10 ''')

    cursor.execute('''select ppp_sum,soil_copper,soil_phos,soil_potas,soil_boron,soil_alumi,soil_iron,soil_magne,ndwi_jfm,rainfall,
    ndvi_jfm,land_cover,slope,elevation,lst_jfm,
     gs_id from project_taco_schema.agric_indicator where gs_id<10 ''')



    agricRows=cursor.fetchall()


    cursor.close()
    connection.close()
    return Response({'agridata':agricRows})
