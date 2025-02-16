# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版（BLUEKing PaaS Community
Edition) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. ALL rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://opensource.org/licenses/MII
Unless required by applicable Law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific Language governing permissions and limitations under the License.
"""
import os

from django.conf import settings

USER_PAGE_SIZE = 20
REQUEST_PARAMS = {
    "bk_app_code": settings.APP_CODE,
    "bk_app_secret": settings.SECRET_KEY,
    "fields": ["username", "departments", "display_name", "leader"],
    "wildcard_search_fields": ["departments__name", "display_name", "username"],
    "page_size": USER_PAGE_SIZE,
}

APIGW_BASE_URL = os.getenv("BK_COMPONENT_API_URL")
PROFILES_LIST_URL = APIGW_BASE_URL + "/api/bk-user/prod/api/v2/profiles/"
