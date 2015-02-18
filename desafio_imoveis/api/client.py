import requests
import settings

BASE_URL = "http://57e5585e.ngrok.com/houses-api-demo/api/v1/house/"

class Client(object):
    def __init__(self):
        pass

    def _get_resource(self, resource):
        url = "%s%s" % (BASE_URL, resource)
        response = requests.get(url)
        print "url: %s" % url
        print "response: %s" % response
        print "response.json: %s" % response.json()
        print "response.text: %s" % response.text
        if response.status_code == 200:
            return response.text
        else:
            response.raise_for_status()

    def get_ad_list(self):
        return self._get_resource("list")

    def get_ad(self, slug):
        return self._get_resource("%s" %slug)

    def get_realty_types(self):
        return self._get_resource("types/house")

    def get_states(self):
        return self._get_resource("types/state")

    def get_ad_types(self):
        return self._get_resource("types/ad")