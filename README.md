# PDF-Viewer-Angular 
This a simple way to bind a URL from API to iframe .
For this i have used a directive to set 'src' attribute with value from controller.
The problem that this directive solves: 
 -The view render before the ``iframe``  gets the link string from controller.
 -The src atributte cant render a string passed from controller as a link .
 #This directive sets the link at ``src`` atributte.

``` javascript
    <div class="col-xs-12" ng-if="bookingDetails.contract_url">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">PDF Preview</h3>
            </div>
            <div class="box-body text-center">
                <iframe width="800" height="590"
                        frameborder="0" scrolling="yes" cmsw-src="{{bookingDetails.contract_url}}"></iframe>
            </div>
        </div>
    </div>

