from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination,
)
from rest_framework.response import Response


class CustomPageNumberPagination(PageNumberPagination):
    page_size_query_param = "page_size"
    page_query_param = "page"
    max_page_size = 100
    page_size = 10

    def get_paginated_response(self, data):
        return Response(
            {
                "pagination": {
                    "next_page": self.get_next_link(),
                    "previous_page": self.get_previous_link(),
                    "count": self.page.paginator.count,
                    "current_page": self.page.number,
                    "end_page": self.page.paginator.num_pages,
                },
                "data": data,
            }
        )


class CustomLimitOffsetPagination(LimitOffsetPagination):
    def get_paginated_response(self, data):
        return Response(
            {
                "links": {
                    "next": self.get_next_link(),
                    "previous": self.get_previous_link(),
                },
                "count": self.count,
                "data": data["data"],
            }
        )
