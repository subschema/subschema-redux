import {ValueManager, Form} from 'subschema';
import React from 'react';
import {into, TestUtils, expect, Simulate, byTag, byTags, byType, click} from "subschema-test-support";

describe('Redux Example Usage', function () {


    it('should have an example', function () {
        const vm = ValueManager({},{}, );
        const store = vm.getStore();


        const f = into(<Form schema={{schema: {test: 'Text'}, fieldsets:[{fields:'test', buttons:['btn']}]}}/>, true)

    });

});