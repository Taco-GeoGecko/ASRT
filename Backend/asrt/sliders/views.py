from rest_framework.decorators import api_view
import psycopg2
from rest_framework.response import Response


@api_view(['GET'])
def view(request):
        # establishing a connection
    connection = psycopg2.connect(user = "postgres",
                                    password = "508282044",
                                    host = "127.0.0.1",
                                    port = "5432",
                                    database = "project_taco_db")
        # creating the cursor (vessel to the db)
    cursor=connection.cursor()
        # executing the query
    cursor.execute("SELECT ppp_sum FROM project_taco_schema.agric_indicator where gs_id<10 ")

    agricRows=cursor.fetchall()


    cursor.close()
    connection.close()
    return Response({"agricData": agricRows})
