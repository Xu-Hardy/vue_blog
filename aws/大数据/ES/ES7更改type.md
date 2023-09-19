# ES7更改type

1. **早期版本**：Elasticsearch 的早期版本允许一个索引有多种类型（types）。每种类型可以有自己的字段映射（field mappings）。
2. **后续版本**：Elasticsearch 开始逐步淘汰多类型索引的支持，因为它可能导致映射冲突和一些其他问题。从 6.x 版本开始，Elasticsearch 引入了 `include_type_name` 参数，以准备在 7.x 版本中完全移除类型。在 6.x 版本中，当创建索引或获取映射时，如果您想明确包含类型名称，您应该设置 `include_type_name=true`。否则，API 会返回警告。
3. **7.x 版本**：Elasticsearch 7.x 版本宣布不再支持多类型索引，但仍然允许单一类型。默认情况下，API 响应不再包含类型名称，除非您明确设置 `include_type_name=true`。在7.x版本中，默认情况下类型名称不再在映射API中返回，但如果使用`include_type_name=true`参数，类型名称仍会返回。这是为了帮助那些还没有完全迁移的用户。
4. **8.x 版本及以后**：预计将完全移除对类型的支持。

所以，`_mappings?include_type_name=true` 是在调用 Elasticsearch 的映射 API 时，明确告诉它您想包含类型名称。但随着 Elasticsearch 版本的升级，这个参数的必要性会逐渐降低，并且在未来版本中可能会完全移除。

```json
PUT /my_index?include_type_name=true
{
  "mappings": {
    "my_type": {
      "properties": {
        "field1": {
          "type": "text"
        }
      }
    }
  }
}

GET /my_index/_mapping?include_type_name=true

结果：
{
  "my_index" : {
    "mappings" : {
      "my_type" : {
        "properties" : {
          "field1" : {
            "type" : "text"
          },
          "field2" : {
            "type" : "text"
          }
        }
      }
    }
  }
}

POST /my_index/my_type/
{"a":1}

# 结果
{
  "_index" : "my_index",
  "_type" : "my_type",
  "_id" : "ud_1p4oBkiOJ9eFtUqy1",
  "_version" : 1,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 2,
    "failed" : 0
  },
  "_seq_no" : 0,
  "_primary_term" : 1
}

```



可以看到type确实已经被更改了，

```json
{
  "took" : 5,
  "timed_out" : false,
  "_shards" : {
    "total" : 5,
    "successful" : 5,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 1,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "apilog_dev1",
        "_type" : "zuul",
        "_id" : "1",
        "_score" : 1.0,
        "_source" : {
          "a" : 1
        }
      }
    ]
  }
}

```



如果设置两个type的话，只有第二个会生效。

```json
PUT /my_inde21?include_type_name=true
{
  "mappings": {
    "my_type": {
      "properties": {
        "field1": {
          "type": "text"
        }
      }
    },
    "my_type2": {
      "properties": {
        "field1": {
          "type": "text"
        }
      }
    }
  }
}
```



```
GET my_inde21/_mappings?include_type_name=true
#结果如下

{
  "my_inde21" : {
    "mappings" : {
      "my_type2" : {
        "properties" : {
          "field1" : {
            "type" : "text"
          }
        }
      }
    }
  }
}

```